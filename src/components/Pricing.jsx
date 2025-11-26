import React from 'react';

function Pricing() {
  const plans = [
    {
      name: '免费模式',
      price: '¥0',
      period: '永久免费',
      description: '适用于个人开发者和小型项目',
      features: [
        '每天10万请求数',
        '每函数100QPS并发',
        '最多20个函数',
        '每函数5个版本',
        '每函数20个站点绑定',
        '基础功能支持'
      ],
      limitations: [
        '不支持日志投递',
        '无SLA保障'
      ],
      buttonText: '立即使用',
      popular: false
    },
    {
      name: '付费模式',
      price: '¥5',
      period: '每百万次请求',
      description: '适用于企业级生产环境',
      features: [
        '无请求数限制',
        '无并发数限制',
        '最多100个函数',
        '每函数20个版本',
        '每函数100个站点绑定',
        '支持日志投递',
        '99.95% SLA保障',
        '企业级技术支持'
      ],
      limitations: [],
      buttonText: '开始使用',
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">计费说明</h2>
          <p className="text-xl text-gray-600">灵活的计费模式，满足不同需求</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden card-hover ${
                plan.popular ? 'ring-4 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 font-semibold">
                  <i className="fas fa-star mr-2"></i>推荐方案
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-opacity-90' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  12月1日上线
                </button>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg mb-3">功能特性：</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <i className="fas fa-check-circle text-green-500 mt-1"></i>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="font-bold text-lg mb-3 mt-6">限制说明：</h4>
                      {plan.limitations.map((limitation, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <i className="fas fa-times-circle text-red-500 mt-1"></i>
                          <span className="text-gray-700">{limitation}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">
            <i className="fas fa-info-circle text-blue-500 mr-2"></i>
            计费说明
          </h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <i className="fas fa-circle text-xs text-blue-500 mt-2"></i>
              <p>Pages流量费用使用站点套餐流量额度，动态函数调用按函数计费规则结算</p>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-circle text-xs text-blue-500 mt-2"></i>
              <p>边缘函数是增值服务，单独按执行次数计费，不使用不计费。免费模式赠送函数请求数。</p>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-circle text-xs text-blue-500 mt-2"></i>
              <p>日结计费：每日产生的费用，于次日零点扣费</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
