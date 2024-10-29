import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Sarah Chen
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="text-gray-500 hover:text-gray-700 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-500 hover:text-gray-700 transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}