import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-cloud text-primary text-2xl"></i>
              <span className="text-xl font-bold">阿里云 ESA</span>
            </div>
            <p className="text-gray-400 text-sm">
              边缘安全加速，为您的应用提供全球化的部署和加速服务
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">产品</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/what-is-functions-and-pages/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">函数和 Pages</a></li>
              <li><a href="https://help.aliyun.com/zh/edge-security-acceleration/esa/product-overview/pop-distribution" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">边缘网络</a></li>
              <li><a href="https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/security-overview/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">安全防护</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">资源</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://help.aliyun.com/zh/edge-security-acceleration/esa/api-reference-1-1/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">API参考</a></li>
              <li><a href="https://bailian.console.aliyun.com/?utm_content=se_1021228191&gclid=EAIaIQobChMImK-J8tX6kAMVyewWBR0ASQf7EAAYASAAEgJQE_D_BwE&tab=mcp#/mcp-market/detail/aliyun-esa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">MCP</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">支持</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 阿里云计算有限公司 版权所有
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-weixin text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
