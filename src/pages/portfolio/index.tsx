import { useEffect, useRef } from 'react';

import { Globe, Github, Code2 } from 'lucide-react';

import { SEO } from '@/components';

export default function Portfolio() {
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

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const projects = [
    {
      title: 'Shorten-URL',
      description:
        'QR codes and short links are like peas in a pod. it offers free QR codes for every short link you create.',
      image: '/assets/imgs/portfolio/arcube.benchaalia.png',
      liveUrl: 'https://arcube.benchaalia.com',
      githubUrl: 'https://github.com/SamyBchaalia/arcube-frontend-test',
      technologies: [
        'React',
        'TypeScript',
        'Nest.js',
        'MongoDb',
        'Tailwind',
        'Jest',
      ],
      featured: true,
    },
    {
      title: 'Teams+',
      description:
        'Enhance Teams workspace with a powerful extension for real-time, exclusive notifications. This solution enables seamless multi-channel communication—Teams, email, and SMS—ensuring urgent messages reach only authorized users within your organization.',
      image: '/assets/imgs/portfolio/screenTeams+.png',

      technologies: [
        'React',
        'TypeScript',
        'Nest.js',
        'Azure Bot',
        'Tailwind',
        'Jest',
        'Azure devops',
        'Angular',
      ],
    },
    {
      title: 'Nemo',
      description:
        'Internal CRM for managing customer data, orders, and inventory. It includes a dashboard for tracking sales, revenue, and customer satisfaction.',
      image: '/assets/imgs/portfolio/logo_crm.png',
      technologies: ['Angular', 'Nest.js', 'PostgresQl', 'WebSocket'],
    },
    {
      title: 'Le Genevois Français',
      description:
        'A centralized platform for managing smart home devices with automation rules, energy monitoring, and voice control integration.',
      image: '/assets/imgs/portfolio/genevois.png',
      liveUrl: 'https://www.genevoisfrancais.org/carte-des-services/',
      // githubUrl: 'https://github.com/yourusername/smart-home',
      technologies: [
        'WordPress',
        'JQuery',
        'PHP',
        'Theme Development',
        'Plugin Development',
      ],
    },
    {
      title: 'Ansbrasil',
      description:
        'E-commerce application for selling products online with a custom theme, payment gateway integration, and order management system. data from salesforce.',
      image: '/assets/imgs/portfolio/ansbrasil.png',
      liveUrl: 'https://www.anbrasil.com',
      // githubUrl: 'https://github.com/yourusername/smart-home',
      technologies: [
        'Prestashop',
        'JQuery',
        'PHP',
        'Theme Development',
        'Plugin Development',
        'Node.js',
        'RabbitMQ',
        'Salesforce API',
        'Puppeteer',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Portfolio - Web Development Projects | Sami Ben Chaalia"
        description="Explore Sami Ben Chaalia's portfolio showcasing professional web development projects built with TypeScript, React, Node.js, NestJS, Angular, and modern web technologies."
        url="https://samibenchaalia.com/portfolio"
      />
      <section
        id="portfolio"
        className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-800 dark:to-gray-900 dark:text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-center justify-center gap-4">
            <Code2 className="size-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-center text-4xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-on-scroll translate-y-8 opacity-0 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative grid items-center gap-8 overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 md:grid-cols-2">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden rounded-xl md:h-full">
                    <div className="absolute inset-0 bg-blue-600/10 transition-colors duration-300 group-hover:bg-blue-600/0 dark:bg-blue-400/10 dark:group-hover:bg-blue-400/0" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 
                        text-white transition-colors duration-200 hover:bg-blue-700"
                        >
                          <Globe className="size-4" />
                          <span>Link</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 
                        text-white transition-colors duration-200 hover:bg-gray-900 
                        dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          <Github className="size-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute right-4 top-4">
                      <span
                        className="rounded-full bg-blue-100 px-3 py-1 
                      text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
