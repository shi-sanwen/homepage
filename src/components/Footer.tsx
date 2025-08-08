import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-6">创梦星际</div>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            用技术来打造新的世界，为用户创造价值
          </p>
          <a
            href="https://www.scmgzs.top"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            访问官网
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} 创梦星际. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;