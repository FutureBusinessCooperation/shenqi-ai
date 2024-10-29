import Header from '@/components/Header'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-[1024px] mx-auto px-4 pt-20 text-center">
        <h1 className="text-4xl font-bold mb-4">页面未找到</h1>
        <p className="text-gray-600 mb-8">抱歉，我们找不到您请求的页面。</p>
        <Link href="/" className="text-blue-600 hover:text-blue-500">
          返回首页
        </Link>
      </div>
    </div>
  )
} 