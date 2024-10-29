'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Header from '@/components/Header'

export default function CreateCourse() {
  const { data: session } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const courseId = searchParams.get('id')

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = ['AI基础', '机器学习', '深度学习']
  const tagOptions = ['入门', '进阶', '高级', '实战', '理论']

  useEffect(() => {
    if (courseId) {
      const fetchCourse = async () => {
        try {
          const response = await fetch(`/api/courses/${courseId}`)
          if (response.ok) {
            const data = await response.json()
            setTitle(data.title)
            setContent(data.content)
            setCategory(data.category)
            setTags(data.tags)
          } else {
            console.error('获取课程失败')
          }
        } catch (error) {
          console.error('获取课程错误:', error)
        }
      }
      fetchCourse()
    }
  }, [courseId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    
    try {
      setIsSubmitting(true)
      setMessage('')

      if (!session?.user?.email) {
        setMessage('请先登录')
        return
      }

      const courseData = {
        title,
        content,
        category,
        tags,
        user: session.user.email
      }

      const url = courseId ? `/api/courses/${courseId}` : '/api/courses'
      const method = courseId ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      })

      if (response.ok) {
        setMessage('课程保存成功！')
        setTimeout(() => {
          router.push('/courses/my-courses')
        }, 1500)
      } else {
        const error = await response.json()
        setMessage(`保存失败: ${error.message || '未知错误'}`)
      }
    } catch (error) {
      console.error('提交错误:', error)
      setMessage('提交时发生错误，请重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="max-w-[1024px] mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold mb-8">{courseId ? '编辑课程' : '创建新课程'}</h1>
        {message && (
          <div className={`mb-4 p-4 rounded-lg ${
            message.includes('成功') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">课程标题</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="输入课程标题"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">课程内容</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              rows={10}
              placeholder="输入课程内容"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">课程分类</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            >
              <option value="">选择分类</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">标签</label>
            <div className="mt-2 space-x-2">
              {tagOptions.map((tag) => (
                <label key={tag} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={tags.includes(tag)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTags([...tags, tag])
                      } else {
                        setTags(tags.filter(t => t !== tag))
                      }
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">{tag}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? '保存中...' : '保存课程'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 