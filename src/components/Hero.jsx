import React from 'react';

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">ESA - 函数和 Pages</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            边缘全栈开发平台，全面对标 Vercel
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">
            深度集成 Git 工作流、全球边缘网络与智能构建系统，为企业及开发者提供从代码提交到全球分发的一站式部署解决方案
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button 
              onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <i className="fas fa-user-plus mr-2"></i>
              加入邀测
            </button>
            <a 
              href="https://www.alibabacloud.com/help/zh/edge-security-acceleration/esa/user-guide/what-is-functions-and-pages/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all inline-flex items-center justify-center"
            >
              <i className="fas fa-book mr-2"></i>
              查看文档
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">秒级部署</h3>
              <p className="text-gray-600">全球边缘网络，秒级完成部署</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">企业级安全</h3>
              <p className="text-gray-600">WAF、抗DDoS、Bots管理</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">自动化构建</h3>
              <p className="text-gray-600">原生支持GitHub，自动部署</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
