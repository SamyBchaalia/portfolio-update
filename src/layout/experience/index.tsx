import { useEffect, useRef } from 'react';

import './experience.css';

import { Building2, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Cruxsoft',
      link: 'https://www.cruxsoft.eu',
      position: 'Senior Software Engineer | Team Lead',
      period: 'May 2024 - Present',
      location: 'Brussels, Belgium (Hybrid)',
      description:
        'Led development of key features and mentored junior developers. Specialized in React, Node.js, and cloud technologies.',
      technologies: [
        'React',
        'Angular',
        'NestJs',
        'TypeScript',
        'Azure bot',
        'PostgreSQL',
        'Microsoft Teams Extension',
      ],
    },
    {
      company: 'Encore Lab',
      link: 'https://www.encore-lab.com',
      position: 'Full-Stack Engineer',
      period: 'May 2023 - May 2024',
      location: 'Remote (Spain)',
      description:
        'Developed and maintained full-stack applications using modern technologies.',
      technologies: ['Angular', 'NestJs', 'TypeScript', 'PostgreSQL'],
    },
    {
      company: 'Solvr',
      position: 'Tech Lead | Software Engineer',
      link: 'https://solvr.fr',
      period: 'Sep 2022 - May 2023',
      location: 'Remote (France)',
      description:
        'Led technical initiatives and managed development teams while architecting scalable solutions.',
      technologies: [
        'React',
        'Node.js',
        'AWS Lambda',
        'MongoDB',
        'PostgresQl',
        'Docker',
        'Prestashop',
        'Wordpress',
        'Ajax',
        'Jquery',
        'Google cLoud',
        'Firebase',
      ],
    },
    {
      company: 'Social Hackers Academy',
      position: 'Full-Stack Developer',
      link: 'https://socialhackersacademy.org/',
      period: 'Mars 2022 – September 2022',
      location: 'Remote (Greece)',
      description:
        'Built automation tools, including Zoom attendance tracking via API and provided mentorship and technical support for students.',
      technologies: [
        'React',
        'Node.js',
        'AWS Lambda',
        'MongoDB',
        'PostgresQl',
        'Docker',
        'Prestashop',
        'Wordpress',
        'Ajax',
        'Jquery',
        'Google cLoud',
        'Firebase',
      ],
    },
    {
      company: 'High Country Dev',
      link: 'https://mountaindev.com/',
      position: 'Full-Stack Developer',
      period: 'Jul 2021 – Oct 2021',
      location: 'Remote, USA',
      description:
        'Developed an org chart software with Slack integrations and D3.js-based visualizations.',
      technologies: ['Slack API', 'D3.js', 'TypeScript', 'Node.js'],
    },
    {
      company: 'Tynass IT',
      link: 'https://www.linkedin.com/company/tynass-it/',
      position: 'Full-Stack Developer',
      period: 'Jul 2019 – Jul 2021',
      location: 'Tunis, Tunisia',
      description:
        'Built Karriery: A career coaching platform with resume parsing & job-matching automation. Developed WideHelwa: An e-commerce platform with PayPal integration & social authentication.',
      technologies: [
        'Angular',
        'NestJS',
        'TypeScript',
        'PostgreSQL',
        'PayPal API',
      ],
    },
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = document.querySelectorAll('.experience-card');
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-800 dark:to-gray-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold">
          Professional Journey
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`experience-card translate-y-8 rounded-xl border border-gray-100 bg-white
                p-6 opacity-0 shadow-lg transition-all duration-700 
                ease-out hover:-translate-y-1 hover:shadow-2xl
                dark:border-gray-700 dark:bg-gray-800`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                    <Building2 className="size-4" />
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {exp.company}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="size-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="size-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-gray-100 
                      px-3 py-1 text-sm text-gray-700
                      transition-colors duration-200 hover:bg-gray-200
                      dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
