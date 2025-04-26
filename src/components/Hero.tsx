import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 overflow-hidden flex items-center"
    >
      <div className="absolute inset-0">
        <img 
          src="https://fileass.song3060.top:10006/i/2025/02/06/hwtx8.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-gray-900 dark:to-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm animate-fade-in">
              ✨ 引领迷你世界的未来
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">创梦星际</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                引领迷你
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl animate-fade-in animation-delay-200">
              用技术来填补迷你的空缺，让大家一起享受老版本的快乐。我们致力于为用户提供最优质的体验。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.scmgzs.top"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]"
              >
                <span className="relative flex items-center">
                  访问官网
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
              
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center">
                  了解更多
                  <ChevronDown size={18} className="ml-2 transition-transform duration-300 group-hover:translate-y-1" />
                </span>
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://s3.cdnjson.com/images/2025/02/06/DeWatermark.ai_1733563936763.png"
                  alt="创梦星际"
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;