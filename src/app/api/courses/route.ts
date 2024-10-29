import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Course from '@/models/Course'
import { getServerSession } from 'next-auth'

export async function POST(req: Request) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ error: '未授权' }, { status: 401 })
    }

    await dbConnect()
    const data = await req.json()

    // 验证必填字段
    if (!data.title || !data.content || !data.category) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      )
    }

    // 创建新课程
    const course = await Course.create({
      title: data.title,
      content: data.content,
      category: data.category,
      tags: data.tags || [],
      user: session.user.email
    })

    return NextResponse.json(course, { status: 201 })

  } catch (error: any) {
    console.error('创建课程错误:', error)
    return NextResponse.json(
      { error: error.message || '创建课程失败' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await dbConnect()
    const courses = await Course.find({}).sort({ createdAt: -1 })
    return NextResponse.json(courses)
  } catch (error: any) {
    console.error('获取课程错误:', error)
    return NextResponse.json(
      { error: error.message || '获取课程失败' },
      { status: 500 }
    )
  }
} 