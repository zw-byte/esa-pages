import React, { useState } from 'react';

function QuickStart() {
  const [activeTab, setActiveTab] = useState('template');

  const methods = [
    {
      id: 'template',
      name: '模板创建',
      icon: 'fa-layer-group',
      steps: [
        '登录ESA控制台，选择边缘计算 > 函数和Pages',
        '单击创建，选择Pages模板页签',
        '选择合适的框架模板（React、Vue、Next.js等）',
        '添加Github账号并完成授权',
        '填写项目名称，单击开始部署',
        '等待构建完成，获取公共域名访问链接'
      ]
    },
    {
      id: 'github',
      name: 'Github导入',
      icon: 'fa-github',
      steps: [
        '准备好Github账号和代码仓库',
        '登录ESA控制台，选择导入Github仓库',
        '添加Github账户并授权',
        '选择需要构建的仓库',
        '配置构建信息（分支、命令、目录等）',
        '开始部署，等待构建完成'
      ]
    },
    {
      id: 'cli',
      name: 'CLI工具',
      icon: 'fa-terminal',
      steps: [
        '安装Node.js环境',
        '全局安装esa-cli：npm i esa-cli@latest -g',
        '登录RAM用户：esa-cli login',
        '初始化项目：esa-cli init',
        '选择框架和配置',
        '自动构建并部署'
      ]
    },
    {
      id: 'function',
      name: '函数创建',
      icon: 'fa-code',
      steps: [
        '登录ESA控制台，单击创建',
        '选择函数模板页签，选择合适的模板',
        '填写函数名称和描述',
        '在代码编辑器中开发JavaScript代码',
        '使用右侧调试工具测试函数',
        '生成版本并发布到测试/生产环境'
      ]
    }
  ];

  return (
    <section id="quickstart" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">快速开始</h2>
          <p className="text-xl text-gray-600">多种方式，快速部署您的应用</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveTab(method.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === method.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className={`fas ${method.icon} mr-2`}></i>
              {method.name}
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          {methods.map((method) => (
            <div
              key={method.id}
              className={`${activeTab === method.id ? 'block' : 'hidden'}`}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <i className={`fas ${method.icon} text-primary mr-3`}></i>
                {method.name}部署步骤
              </h3>
              
              <div className="space-y-6">
                {method.steps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md card-hover"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              {method.id === 'cli' && (
                <div className="mt-8 bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm">
                  <div className="mb-2">$ npm i esa-cli@latest -g</div>
                  <div className="mb-2">$ esa-cli login</div>
                  <div className="mb-2">$ esa-cli init</div>
                  <div className="text-gray-500"># 按提示完成配置...</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-link text-primary mr-2"></i>
              绑定自定义域名
            </h3>
            <p className="text-gray-700 mb-4">
              完成部署后，可以绑定自定义域名实现更好的访问体验：
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>通过域名绑定：将整个域名流量转发至函数</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>通过路由配置：将特定路径流量转发至函数</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-book text-secondary mr-2"></i>
              使用限制
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <i className="fas fa-info-circle text-blue-500 mt-1"></i>
                <span>响应时间：最长120秒</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="fas fa-info-circle text-blue-500 mt-1"></i>
                <span>代码包大小：最大4MB</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="fas fa-info-circle text-blue-500 mt-1"></i>
                <span>Pages文件数：最多2000个</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="fas fa-info-circle text-blue-500 mt-1"></i>
                <span>单文件大小：最大25MB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickStart;
