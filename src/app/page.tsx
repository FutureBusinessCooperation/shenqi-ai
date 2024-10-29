'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Header from '@/components/Header'
import { ArrowRightIcon, BookOpenIcon, AcademicCapIcon, BeakerIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const { data: session } = useSession()

  const features = [
    {
      icon: <BookOpenIcon className="w-6 h-6" />,
      title: "AI课程学习",
      description: "探索丰富的AI课程内容，从入门到精通",
      link: "/courses"
    },
    {
      icon: <AcademicCapIcon className="w-6 h-6" />,
      title: "课程创作",
      description: "使用AI辅助工具，轻松创建专业课程",
      link: "/courses/create"
    },
    {
      icon: <BeakerIcon className="w-6 h-6" />,
      title: "AI工具",
      description: "体验强大的AI工具，提升学习效率",
      link: "/tools"
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: "学习社区",
      description: "加入学习社区，与同学交流成长",
      link: "/community"
    }
  ]

  const upcomingFeatures = [
    {
      title: "微信登录",
      description: "即将支持微信一键登录",
      status: "即将推出"
    },
    {
      title: "积分系统",
      description: "完成任务获取积分，兑换精品课程",
      status: "开发中"
    },
    {
      title: "闯关系统",
      description: "关卡式学习，激励持续进步",
      status: "规划中"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* 背景动画效果 */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 opacity-10" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}
          />
        </div>

        <div className="relative max-w-[1024px] mx-auto">
          <div className="text-center">
            {/* 主标题 */}
            <h1 className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></span>
              <span className="relative text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
                一个很
              </span>
              <span className="relative ml-4 text-6xl font-bold bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-transparent bg-clip-text">
                神奇的AI网站
              </span>
            </h1>

            {/* 副标题 */}
            <p className="mt-8 text-xl text-gray-600 mb-12 animate-slide-up delay-100 max-w-2xl mx-auto">
              Ai正在改变世界，让Ai帮助你我高效的解决现实问题
            </p>


            {/* 按钮组 */}
            <div className="flex justify-center gap-4 animate-slide-up delay-300">
              <Link
                href={session ? "/courses" : "/login"}
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-medium hover:opacity-90 transition-opacity"
              >
                {session ? "开始学习" : "立即体验"}
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-gray-200 text-gray-600 text-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Ai工具
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1024px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            核心功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>立即体验</span>
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1024px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            即将推出
          </h2>
          <p className="text-gray-600 text-center mb-12">
            更多激动人心的功能正在开发中
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1024px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            准备好开始了吗？
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            加入我们的学习平台，开启你的AI学习之旅。我们提供专业的课程内容和强大的AI工具支持。
          </p>
          <Link
            href={session ? "/courses" : "/register"}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full button-gradient text-white text-lg font-medium hover-scale"
          >
            {session ? "浏览课程" : "免费注册"}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1024px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">关于我们</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                    公司介绍
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                    联系我们
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">产品服务</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses" className="text-sm text-gray-600 hover:text-gray-900">
                    AI课程
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="text-sm text-gray-600 hover:text-gray-900">
                    AI工具
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">帮助中心</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
                    常见问题
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-sm text-gray-600 hover:text-gray-900">
                    意见反馈
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">条款</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                    隐私政策
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                    服务条款
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Copyright © 2024 神奇网站. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
