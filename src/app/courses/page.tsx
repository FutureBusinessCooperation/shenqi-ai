'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses')
      const data = await response.json()
      setCourses(data)
    }
    fetchCourses()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="max-w-[1024px] mx-auto px-4 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">课程中心</h1>
          <p className="text-lg text-gray-600">探索最新最全的AI课程，开启你的学习之旅</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course: any) => (
            <div 
              key={course._id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="h-40 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">🎓</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{course.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.content}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                      {course.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-500">{course.tags.join(', ')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">作者：{course.user}</span>
                    <span className="text-gray-500">
                      {new Date(course.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 