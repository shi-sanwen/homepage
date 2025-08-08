import React from 'react';
import { Zap, Shield, Globe, Code } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
      <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm">
        <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/50 dark:to-blue-900/50 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "丰富资源",
      description: "流畅的下载速度，丰富的资源库，为您提供最优质的内容体验。"
    },
    {
      icon: <Shield size={28} />,
      title: "安全可靠",
      description: "始终提供安全无毒的文件，对用户数据进行严格的匿名化处理，保护您的隐私。"
    },
    {
      icon: <Globe size={28} />,
      title: "技术支持",
      description: "专业的技术团队，为您提供全方位的支持和解决方案。"
    },
    {
      icon: <Code size={28} />,
      title: "开发友好",
      description: "完善的API文档和开发工具，让开发者能够轻松集成和使用我们的服务。"
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 top-0 right-0 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-0 left-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100/80 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-medium backdrop-blur-sm mb-4 border border-emerald-200/50 dark:border-emerald-700/30">
            ✨ 我们的优势
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            核心优势
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            探索驱动我们前进的方向，为用户提供最优质的服务体验
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a
            href="https://www.scmgzs.top"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">了解更多功能</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;