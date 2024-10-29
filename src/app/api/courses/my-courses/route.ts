import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Course from '@/models/Course'
import { getServerSession } from 'next-auth'

export async function GET() {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ error: '未授权' }, { status: 401 })
    }

    await dbConnect()
    const courses = await Course.find({ user: session.user.email }).sort({ createdAt: -1 })
    return NextResponse.json(courses)
  } catch (error: any) {
    console.error('获取我的课程错误:', error)
    return NextResponse.json(
      { error: error.message || '获取课程失败' },
      { status: 500 }
    )
  }
} 