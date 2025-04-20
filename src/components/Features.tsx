import React from 'react';
import { Zap, Shield, Globe, Code } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "丰富资源",
      description: "流畅的下载速度，丰富的资源"
    },
    {
      icon: <Shield size={24} />,
      title: "安全可靠",
      description: "始终提供安全无毒的文件，且对用户一切数据进行匿名化操作"
    },
    {
      icon: <Globe size={24} />,
      title: "技术支持",
      description: "具有良好的技术，为用户提供更多支持"
    },
    {
      icon: <Code size={24} />,
      title: "开发友好",
      description: "完善的API文档，让开发者能够轻松集成和使用。"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            核心优势
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            探索驱动我们前进的方向
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://www.scmgzs.top"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            了解更多功能
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;