import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/30 rounded-3xl -z-10 transform -rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="我们的团队"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              关于 <span className="text-blue-600 dark:text-blue-400">我们</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              一位初中生的博客，会python，lua，html等语言
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              创梦星际成立于2024年，我们一直致力于迷你世界开发与资源下载，为用户更便捷，更安全的文件。
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10万+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">访问人数</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">提供资源</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">中国</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">服务国家</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">客户满意度</div>
              </div>
            </div>
            
            <a
              href="https://www.scmgzs.top"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg border border-gray-300 dark:border-gray-600 transition-colors duration-300"
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