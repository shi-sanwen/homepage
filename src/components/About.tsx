import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.05),rgba(0,0,0,0))]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl blur opacity-20 dark:opacity-40 animate-pulse"></div>
              <div className="relative">
                <img
                  src="https://fileass.song3060.top:10006/i/2025/02/06/hwtx8.png"
                  alt="我们的团队"
                  className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm mb-6">
              👋 认识我们
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              关于 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400">我们</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                一位初中生的博客，会python，lua，html等语言。热爱编程，致力于为用户创造价值。
              </p>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                创梦星际成立于2024年，我们一直致力于迷你世界开发与资源下载，为用户提供更便捷，更安全的文件服务。
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12 mb-10">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400">10万+</div>
                <div className="text-gray-600 dark:text-gray-300 mt-2">访问人数</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400">15+</div>
                <div className="text-gray-600 dark:text-gray-300 mt-2">提供资源</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400">中国</div>
                <div className="text-gray-600 dark:text-gray-300 mt-2">服务国家</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400">98%</div>
                <div className="text-gray-600 dark:text-gray-300 mt-2">客户满意度</div>
              </div>
            </div>
            
            <a
              href="https://www.scmgzs.top"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              了解更多详情
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;