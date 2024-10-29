'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import { useSession } from 'next-auth/react'

export default function MyCourses() {
  const { data: session } = useSession()
  const [courses, setCourses] = useState<any[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/login')
      return
    }
    
    fetchCourses()
  }, [session, router])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/courses/my-courses')
      if (!response.ok) {
        throw new Error('获取课程失败')
      }
      const data = await response.json()
      if (Array.isArray(data)) {
        setCourses(data)
      } else {
        setError('数据格式错误')
      }
    } catch (error) {
      console.error('获取课程失败:', error)
      setError('获取课程失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个课程吗？')) return
    
    try {
      const response = await fetch(`/api/courses/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        setCourses(courses.filter(course => course._id !== id))
      } else {
        throw new Error('删除失败')
      }
    } catch (error) {
      console.error('删除课程失败:', error)
      setError('删除课程失败，请重试')
    }
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="max-w-[1024px] mx-auto px-4 pt-20">
        {/* 页面标题区域 */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">我的课程</h1>
            <p className="text-gray-600">管理你创建的所有课程</p>
          </div>
          <Link
            href="/courses/create"
            className="inline-flex items-center justify-center h-[44px] px-6 rounded-full button-gradient text-white text-sm font-medium hover-scale"
          >
            创建新课程
          </Link>
        </div>

        {/* 错误提示 */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* 加载状态 */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">加载中...</p>
          </div>
        ) : courses.length === 0 ? (
          // 空状态
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <p className="text-gray-600 mb-4">还没有创建任何课程</p>
            <Link
              href="/courses/create"
              className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            >
              创建第一个课程
            </Link>
          </div>
        ) : (
          // 课程列表
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course: any) => (
              <div
                key={course._id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{course.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.content}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                      {course.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{course.tags.join(', ')}</span>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => router.push(`/courses/create?id=${course._id}`)}
                      className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                    >
                      编辑
                    </button>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="text-red-600 hover:text-red-500 text-sm font-medium"
                    >
                      删除
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}