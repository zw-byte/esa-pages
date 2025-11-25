import React, { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="https://www.aliyun.com/product/esa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <i className="fas fa-cloud text-primary text-2xl"></i>
            <span className="text-xl font-bold gradient-text">阿里云 ESA</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-primary transition-colors">
              核心能力
            </button>
            <button onClick={() => scrollToSection('architecture')} className="text-gray-700 hover:text-primary transition-colors">
              工作原理
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-primary transition-colors">
              计费说明
            </button>
            <button onClick={() => scrollToSection('quickstart')} className="text-gray-700 hover:text-primary transition-colors">
              快速开始
            </button>
            <button onClick={() => scrollToSection('comparison')} className="text-gray-700 hover:text-primary transition-colors">
              竞品对比
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all">
              12月1日上线
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
