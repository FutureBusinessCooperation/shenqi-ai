'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'

export default function Header() {
  const { data: session } = useSession()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSignOut = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nqvpavhmfjha.sealosbja.site'
    await signOut({ 
      redirect: true, 
      callbackUrl: baseUrl 
    })
  }

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-[1024px] mx-auto flex items-center justify-between h-[44px] px-4">
        <Link href="/" className="text-[17px] font-semibold text-gradient hover-scale inline-block">
          神奇网站
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/courses" className="text-sm text-gray-600 hover:text-gray-900">
            课程中心
          </Link>
          <Link href="/tools" className="text-sm text-gray-600 hover:text-gray-900">
            AI工具
          </Link>
          {session ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                我的
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link href="/courses/my-courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    我的课程
                  </Link>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    我的资料
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    设置
                  </Link>
                </div>
              )}
            </div>
          ) : null}
          {session ? (
            <button onClick={handleSignOut} className="text-sm text-gray-600 hover:text-gray-900">
              登出
            </button>
          ) : (
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
              登录
            </Link>
          )}
        </div>
      </div>
    </header>
  )
} 