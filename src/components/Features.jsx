import React from 'react';

function Features() {
  const features = [
    {
      icon: 'fa-code-branch',
      title: '自动化构建和部署',
      description: '原生支持 GitHub，自动感知主干分支代码变更并完成构建和部署',
      color: 'text-blue-500'
    },
    {
      icon: 'fa-globe',
      title: '全球边缘分发网络',
      description: '秒级完成全球部署，所有请求通过分布式网络就近分发，确保最低延迟',
      color: 'text-green-500'
    },
    {
      icon: 'fa-shield-alt',
      title: '企业级安全合规',
      description: '与ESA安全加速无缝集成，快速具备WAF、抗DDoS、Bots管理等安全能力',
      color: 'text-red-500'
    },
    {
      icon: 'fa-bolt',
      title: '边缘函数能力',
      description: '基于V8 Isolate提供低延迟的边缘函数服务，自动扩缩容，无需管理基础设施',
      color: 'text-yellow-500'
    },
    {
      icon: 'fa-laptop-code',
      title: '开发者友好体验',
      description: '支持多端操作，提供 Web 控制台、命令行工具及 RESTful API',
      color: 'text-purple-500'
    },
    {
      icon: 'fa-chart-line',
      title: '灰度发布',
      description: '支持基于百分比的灰度发布，实现精细化的渐进式发布',
      color: 'text-indigo-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 gradient-text">核心能力</h2>
          <p className="text-xl text-gray-600">强大的功能，助力您的业务快速发展</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-5xl mb-4 ${feature.color}`}>
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
