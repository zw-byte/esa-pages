import React, { useState } from 'react';

function Comparison() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部对比', icon: 'fa-th' },
    { id: 'core', name: '核心能力', icon: 'fa-star' },
    { id: 'security', name: '安全特性', icon: 'fa-shield-alt' },
    { id: 'performance', name: '性能表现', icon: 'fa-tachometer-alt' },
    { id: 'developer', name: '开发体验', icon: 'fa-code' }
  ];

  const comparisonData = [
    {
      category: 'core',
      dimension: '核心定位',
      esa: '安全优先的边缘计算平台',
      vercel: '前端开发者友好的全栈平台',
      cloudflare: '全球边缘网络Serverless平台'
    },
    {
      category: 'core',
      dimension: '边缘节点',
      esa: '覆盖中国主流城市及海外重点区域',
      vercel: '全球 30+ 区域',
      cloudflare: '全球 300+ 城市'
    },
    {
      category: 'core',
      dimension: '运行时环境',
      esa: 'V8 Isolate，支持 JavaScript/TypeScript',
      vercel: 'Node.js + Edge Runtime',
      cloudflare: 'V8 Isolate，Workers 运行时'
    },
    {
      category: 'security',
      dimension: '安全能力',
      esa: '✅ 内置企业级 WAF、DDoS 防护、Bot 管理',
      vercel: '基础防护，高级功能需付费',
      cloudflare: '基础防护，需配置规则集',
      highlight: 'esa'
    },
    {
      category: 'security',
      dimension: '中国合规',
      esa: '✅ ICP 备案、数据境内存储、完全合规',
      vercel: '❌ 无中国数据中心',
      cloudflare: '⚠️ 部分功能受限',
      highlight: 'esa'
    },
    {
      category: 'security',
      dimension: '等保认证',
      esa: '✅ 支持等保三级认证',
      vercel: '❌ 不支持',
      cloudflare: '❌ 不支持',
      highlight: 'esa'
    },
    {
      category: 'performance',
      dimension: '性能表现',
      esa: '国内访问延迟极低，函数冷启动小于10ms',
      vercel: 'Node.js运行时冷启动时间高于V8 Isolate',
      cloudflare: '海外覆盖好，全球低延迟'
    },
    {
      category: 'performance',
      dimension: '并发处理',
      esa: '自动扩缩容，支持百万高并发',
      vercel: '有并发限制,受套餐影响',
      cloudflare: '无并发限制'
    },
    {
      category: 'developer',
      dimension: '开发体验',
      esa: 'CLI + MCP工具 + 控制台，中文文档完善',
      vercel: '极简 Git 集成，实时预览',
      cloudflare: 'Wrangler CLI 强大'
    },
    {
      category: 'developer',
      dimension: '框架支持',
      esa: 'React、Vue、Next.js、Nuxt 等主流框架',
      vercel: 'Next.js原生支持',
      cloudflare: '支持多种框架，需适配'
    },
    {
      category: 'developer',
      dimension: '本地调试',
      esa: 'CLI 本地开发环境',
      vercel: 'Vercel CLI + 本地预览',
      cloudflare: 'Wrangler 本地模拟'
    },
    {
      category: 'developer',
      dimension: '版本管理',
      esa: '支持多版本并存，灰度发布',
      vercel: '预览部署 + 生产部署',
      cloudflare: 'Workers 版本管理'
    },
    {
      category: 'developer',
      dimension: '监控日志',
      esa: '实时日志、性能监控、告警',
      vercel: 'Analytics + Logs（部分付费）',
      cloudflare: 'Workers Analytics'
    }
  ];

  const scenarios = [
    {
      title: '选择 ESA',
      icon: 'fa-check-circle',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: '如果你的应用面向中国市场，且对网站的国内性能、安全合规、等保要求、ICP 备案支持有强需求，同时希望获得边缘计算能力，ESA 是更具本土优势的选择。',
      features: ['国内性能', '安全合规要求高', 'ICP备案支持', '等保认证需求']
    },
    {
      title: '选择 Vercel',
      icon: 'fa-globe',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: '适用于使用Next.js框架的团队，Vercel具备开箱即用的预览环境和团队协作界面，以及优秀的前端工程化体验。',
      features: ['国际化团队', 'Next.js 技术栈', '团队协作', '前端工程化体验']
    },
    {
      title: '选择 Cloudflare',
      icon: 'fa-bolt',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      description: '适合静态站点或轻量JAMStack，或有自建源站,需要Pages和自有源站共同服务的场景。同时Cloudflare也提供例如R2、D1、Durable Objects等强大的Workers生态。',
      features: ['全球低延迟', '静态网站', '源站代理加速', 'Workers生态']
    }
  ];

  const filteredData = activeCategory === 'all' 
    ? comparisonData 
    : comparisonData.filter(item => item.category === activeCategory);

  return (
    <section id="comparison" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">竞品对比</h2>
          <p className="text-xl text-gray-600">与主流边缘计算平台的全方位对比</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              <i className={`fas ${category.icon} mr-2`}></i>
              {category.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">对比维度</th>
                  <th className="px-6 py-4 text-left font-bold">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-cloud"></i>
                      <span>ESA 函数和 Pages</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-bold">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-triangle"></i>
                      <span>Vercel</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-bold">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-bolt"></i>
                      <span>Cloudflare Workers & Pages</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                      row.highlight === 'esa' ? 'bg-green-50' : ''
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                      {row.dimension}
                    </td>
                    <td className={`px-6 py-4 text-gray-700 ${row.highlight === 'esa' ? 'font-semibold' : ''}`}>
                      {row.esa}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.vercel}</td>
                    <td className="px-6 py-4 text-gray-700">{row.cloudflare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <i className="fas fa-chart-bar text-blue-500 mr-3"></i>
            性能对比数据
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-primary mb-2">&lt; 50ms</div>
                <div className="text-gray-600">国内平均延迟</div>
              </div>
              <div className="text-sm text-gray-500 text-center">
                ESA 在中国大陆的边缘节点覆盖
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-secondary mb-2">99.95%</div>
                <div className="text-gray-600">服务可用性</div>
              </div>
              <div className="text-sm text-gray-500 text-center">
                企业级 SLA 保障
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-green-500 mb-2">&lt; 10ms</div>
                <div className="text-gray-600">函数冷启动时间</div>
              </div>
              <div className="text-sm text-gray-500 text-center">
                V8 Isolate 快速启动
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
            选型建议
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <div 
                key={index}
                className={`${scenario.bgColor} border-2 ${scenario.borderColor} rounded-2xl p-8 card-hover`}
              >
                <div className={`text-5xl ${scenario.color} mb-4`}>
                  <i className={`fas ${scenario.icon}`}></i>
                </div>
                <h4 className="text-2xl font-bold mb-4">{scenario.title}</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">{scenario.description}</p>
                <div className="space-y-2">
                  {scenario.features.slice(1).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <i className={`fas fa-check ${scenario.color}`}></i>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <i className="fas fa-balance-scale text-purple-500 mr-2"></i>
            详细功能对比
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-lg mb-4 text-green-600">
                <i className="fas fa-check-circle mr-2"></i>
                ESA 独特优势
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-yellow-500 mt-1"></i>
                  <span>完整的中国合规支持（ICP备案、等保认证）</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-yellow-500 mt-1"></i>
                  <span>内置企业级安全防护（WAF、DDoS、Bot管理）</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-yellow-500 mt-1"></i>
                  <span>国内访问延迟极低，边缘节点覆盖广</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-yellow-500 mt-1"></i>
                  <span>中文文档和技术支持</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-yellow-500 mt-1"></i>
                  <span>与阿里云生态深度集成</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-lg mb-4 text-blue-600">
                <i className="fas fa-globe mr-2"></i>
                竞品特色功能
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-triangle text-blue-500 mt-1"></i>
                  <span><strong>Vercel:</strong> Next.js 深度优化，开发体验极致</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-triangle text-blue-500 mt-1"></i>
                  <span><strong>Vercel:</strong> 预览部署功能强大，团队协作便捷</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-bolt text-orange-500 mt-1"></i>
                  <span><strong>Cloudflare:</strong> 全球节点最多，延迟最低</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-bolt text-orange-500 mt-1"></i>
                  <span><strong>Cloudflare:</strong> 无缝接入KV、R2、D1、Queues等服务</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comparison;
