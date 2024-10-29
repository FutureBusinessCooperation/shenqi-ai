import Header from '@/components/Header'

export default function Tools() {
  const tools = [
    {
      name: 'AI文本助手',
      description: '智能文本生成与优化工具，提供多场景文案创作支持',
      icon: '✍️',
      status: '即将上线'
    },
    {
      name: 'AI图像生成',
      description: '基于最新模型的AI绘画工具，让创意转化为现实',
      icon: '🎨',
      status: '开发中'
    },
    {
      name: 'AI代码助手',
      description: '智能代码补全与优化，提升开发效率',
      icon: '💻',
      status: '规划中'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="max-w-[1024px] mx-auto px-4 pt-20">
        {/* 页面标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI工具</h1>
          <p className="text-lg text-gray-600">
            探索强大的AI工具，提升工作效率
          </p>
        </div>

        {/* 工具列表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{tool.name}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                {tool.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 