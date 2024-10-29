import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}