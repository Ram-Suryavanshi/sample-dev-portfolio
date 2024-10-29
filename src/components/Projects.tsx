import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cloud Infrastructure Optimizer',
    description: 'Developed an ML-powered system that optimizes cloud resource allocation, reducing costs by 30% while maintaining performance.',
    tech: ['Python', 'TensorFlow', 'Kubernetes', 'GCP'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Distributed Tracing System',
    description: 'Built a high-performance distributed tracing system handling 1M+ requests per second with sub-millisecond latency.',
    tech: ['Go', 'OpenTelemetry', 'Prometheus', 'gRPC'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Real-time Analytics Pipeline',
    description: 'Architected a real-time data processing pipeline for analyzing user behavior patterns at scale.',
    tech: ['Scala', 'Apache Kafka', 'Apache Spark', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-600 hover:text-gray-900 transition flex items-center gap-1">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={project.live} className="text-gray-600 hover:text-gray-900 transition flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}