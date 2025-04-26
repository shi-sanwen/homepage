import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),rgba(0,0,0,0))]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm mb-4">
            📞 联系方式
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            与我联系
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            随时欢迎与我交流，期待您的消息
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <a 
              href="https://qm.qq.com/q/mf17BazQpW"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">QQ</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">2196634956</p>
            </a>
          </div>

          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <a 
              href="mailto:2196634956@qq.com"
              className="relative block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">邮箱</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">2196634956@qq.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;