'use client'

import Header from '@/components/Header'

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="max-w-[1024px] mx-auto px-4 pt-20">
        {/* 页面标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">个人资料</h1>
          <p className="text-lg text-gray-600">管理你的个人信息</p>
        </div>

        {/* 个人信息表单 */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                <input
                  type="text"
                  className="block w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                  placeholder="输入姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">电话</label>
                <input
                  type="tel"
                  className="block w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                  placeholder="输入电话"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">个人简介</label>
                <textarea
                  rows={4}
                  className="block w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                  placeholder="介绍一下你自己"
                />
              </div>
              <div>
                <button className="w-full inline-flex justify-center items-center h-[44px] px-6 rounded-lg button-gradient text-white text-sm font-medium hover-scale">
                  保存更改
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 