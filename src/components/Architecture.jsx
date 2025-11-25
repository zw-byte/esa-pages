import React from 'react';

function Architecture() {
  return (
    <section id="architecture" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">工作原理</h2>
          <p className="text-xl text-gray-600">了解函数和Pages的运行机制</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">判断请求类型</h3>
                <p className="text-gray-600">
                  当客户端请求到达ESA边缘节点时，会进行请求类型分流——函数和Pages请求将进入独立模块进行优化处理
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">处理请求内容</h3>
                <p className="text-gray-600">
                  函数和Pages请求中的动态内容将交由函数模块进行计算处理，静态内容则由缓存模块获取缓存或回源获取资源
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <i className="fas fa-user text-2xl text-primary"></i>
                  <span className="font-bold">客户端请求</span>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm text-gray-600">用户发起HTTP/HTTPS请求</p>
                </div>
              </div>

              <div className="flex justify-center">
                <i className="fas fa-arrow-down text-3xl text-gray-400"></i>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <i className="fas fa-server text-2xl text-secondary"></i>
                  <span className="font-bold">ESA边缘节点</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span className="text-sm">请求分流</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span className="text-sm">动态计算</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span className="text-sm">静态缓存</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <i className="fas fa-arrow-down text-3xl text-gray-400"></i>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <i className="fas fa-paper-plane text-2xl text-green-500"></i>
                  <span className="font-bold">返回响应</span>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-600">快速返回处理结果</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-3 text-blue-900">
              <i className="fas fa-code mr-2"></i>函数
            </h4>
            <p className="text-gray-700 text-sm">
              JavaScript代码运行环境，在边缘节点执行您上传的代码脚本
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-3 text-green-900">
              <i className="fas fa-file-code mr-2"></i>Pages
            </h4>
            <p className="text-gray-700 text-sm">
              一体化前端开发平台，支持静态站点与无服务器应用的构建发布
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-3 text-purple-900">
              <i className="fas fa-code-branch mr-2"></i>版本管理
            </h4>
            <p className="text-gray-700 text-sm">
              支持版本回溯和灰度发布，实现精细化的流量控制
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
