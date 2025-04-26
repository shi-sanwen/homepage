import React from 'react';
import { Github as GithubIcon } from 'lucide-react';

const Github: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),rgba(0,0,0,0))]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  <GithubIcon className="w-12 h-12 md:w-16 md:h-16 text-gray-900 dark:text-white" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    在 GitHub 上关注我
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    欢迎访问我的 Github 项目，让我们一起将他变的更好
                  </p>
                  
                  <a
                    href="https://github.com/shisanwen-gmail/cmxj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg gap-2"
                  >
                    <GithubIcon size={20} />
                    <span>访问 GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="px-8 md:px-12 py-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
                GitHub: @是史三问呀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;