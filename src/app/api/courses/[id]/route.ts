import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Course from '@/models/Course'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const course = await Course.findById(params.id)
    return NextResponse.json(course, { status: 200 })
  } catch (error: any) {
    console.error('获取课程错误:', error)
    return NextResponse.json({ error: error.message || '获取课程失败' }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const courseData = await req.json()
    await dbConnect()
    const course = await Course.findByIdAndUpdate(params.id, courseData, { new: true })
    return NextResponse.json(course, { status: 200 })
  } catch (error: any) {
    console.error('更新课程错误:', error)
    return NextResponse.json({ error: error.message || '更新课程失败' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    await Course.findByIdAndDelete(params.id)
    return NextResponse.json({ message: '课程删除成功' }, { status: 200 })
  } catch (error: any) {
    console.error('删除课程错误:', error)
    return NextResponse.json({ error: error.message || '删除课程失败' }, { status: 500 })
  }
} 