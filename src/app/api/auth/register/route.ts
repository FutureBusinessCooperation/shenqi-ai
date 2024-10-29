import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import { hash } from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    
    // 连接数据库
    await dbConnect()

    // 验证邮箱是否已被注册
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { error: '该邮箱已被注册' },
        { status: 400 }
      )
    }

    // 密码加密
    const hashedPassword = await hash(password, 12)

    // 创建新用户
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email
      }
    }, { status: 201 })

  } catch (error: any) {
    console.error('注册错误:', error)
    return NextResponse.json(
      { error: error.message || '注册失败' },
      { status: 500 }
    )
  }
} 