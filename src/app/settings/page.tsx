'use client'

import Header from '@/components/Header'

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="max-w-[1024px] mx-auto px-4 pt-20">
        {/* 页面标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">设置</h1>
          <p className="text-lg text-gray-600">自定义你的账户和偏好设置</p>
        </div>

        {/* 设置选项 */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {/* 账户设置 */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">账户设置</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">用户名</label>
                    <input
                      type="text"
                      className="block w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                      placeholder="输入用户名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                    <input
                      type="email"
                      className="block w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                      placeholder="输入邮箱"
                    />
                  </div>
                </div>
              </div>

              {/* 通知设置 */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">通知设置</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">邮件通知</h3>
                      <p className="text-sm text-gray-500">接收重要更新和课程通知</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200">
                      <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out"></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 隐私设置 */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">隐私设置</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">公开个人资料</h3>
                      <p className="text-sm text-gray-500">允许其他用户查看你的个人资料</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200">
                      <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50">
              <button className="w-full inline-flex justify-center items-center h-[44px] px-6 rounded-lg button-gradient text-white text-sm font-medium hover-scale">
                保存所有更改
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 