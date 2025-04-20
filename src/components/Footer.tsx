import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-bold text-2xl text-blue-400 mb-4">创梦星际</div>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            用技术来打造新的世界
          </p>
          <a
            href="https://www.scmgzs.top"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            访问官网
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 创梦星际. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;