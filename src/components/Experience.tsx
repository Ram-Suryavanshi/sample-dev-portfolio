import React from 'react';

const experiences = [
  {
    company: 'Google',
    role: 'Senior Software Engineer',
    duration: '2020 - Present',
    description: 'Leading development of cloud infrastructure services, focusing on scalability and reliability. Mentoring junior engineers and contributing to system design.',
    achievements: [
      'Architected a distributed caching system reducing latency by 40%',
      'Led migration of legacy systems to microservices architecture',
      'Improved CI/CD pipeline reducing deployment time by 60%'
    ]
  },
  {
    company: 'Microsoft',
    role: 'Software Engineer',
    duration: '2017 - 2020',
    description: 'Worked on Azure cloud services team, developing and maintaining core infrastructure components.',
    achievements: [
      'Implemented real-time analytics processing pipeline',
      'Reduced system downtime by 75% through improved monitoring',
      'Contributed to open-source projects in the cloud-native space'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.duration}</span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}