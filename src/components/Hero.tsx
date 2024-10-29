import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white"></div>
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-400/20 to-purple-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Senior Software Engineer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                at Google
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Building scalable systems and solving complex problems at Google Cloud. 
              Passionate about distributed systems, machine learning, and open source.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-all duration-200 hover:bg-gray-50"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl transform -rotate-6 scale-95 -z-10"></div>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-full blur transform rotate-6 scale-95 -z-10"></div>
              <div className="relative z-10 h-full bg-white p-3 rounded-full shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border-8 border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}