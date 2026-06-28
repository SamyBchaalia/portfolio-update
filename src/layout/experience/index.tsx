import { useEffect, useRef } from 'react';

import './experience.css';

import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'Cruxsoft',
    link: 'https://www.cruxsoft.eu',
    position: 'Senior Software Engineer · Team Lead',
    period: 'May 2024 – Present',
    location: 'Brussels, Belgium (Hybrid)',
    description:
      'Led development of enterprise features and mentored junior engineers. Built Microsoft Teams extensions, Azure Bot integrations, and complex React/Angular applications for B2B clients.',
    technologies: [
      'React',
      'Angular',
      'NestJS',
      'TypeScript',
      'Azure Bot',
      'PostgreSQL',
      'Teams Extension',
    ],
    isCurrentRole: true,
  },
  {
    company: 'Encore Lab',
    link: 'https://www.encore-lab.com',
    position: 'Full-Stack Engineer',
    period: 'May 2023 – May 2024',
    location: 'Remote (Spain)',
    description:
      'Developed and maintained full-stack product features with a focus on performance and scalability using Angular and NestJS.',
    technologies: ['Angular', 'NestJS', 'TypeScript', 'PostgreSQL'],
  },
  {
    company: 'Solvr',
    position: 'Tech Lead · Software Engineer',
    link: 'https://solvr.fr',
    period: 'Sep 2022 – May 2023',
    location: 'Remote (France)',
    description:
      'Led technical initiatives across multiple e-commerce and SaaS projects. Architected scalable cloud solutions on AWS and Google Cloud.',
    technologies: [
      'React',
      'Node.js',
      'AWS Lambda',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Firebase',
    ],
  },
  {
    company: 'Social Hackers Academy',
    position: 'Full-Stack Developer',
    link: 'https://socialhackersacademy.org/',
    period: 'Mar 2022 – Sep 2022',
    location: 'Remote (Greece)',
    description:
      'Built automation tools including Zoom attendance tracking via API. Provided technical mentorship and support for students across Europe.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'WordPress'],
  },
  {
    company: 'High Country Dev',
    link: 'https://mountaindev.com/',
    position: 'Full-Stack Developer',
    period: 'Jul 2021 – Oct 2021',
    location: 'Remote (USA)',
    description:
      'Developed an org-chart application with Slack integrations and interactive D3.js-based data visualizations for enterprise teams.',
    technologies: ['Slack API', 'D3.js', 'TypeScript', 'Node.js'],
  },
  {
    company: 'Tynass IT',
    link: 'https://www.linkedin.com/company/tynass-it/',
    position: 'Full-Stack Developer',
    period: 'Jul 2019 – Jul 2021',
    location: 'Tunis, Tunisia',
    description:
      'Built Karriery — a career coaching platform with resume parsing and job-matching automation. Built WideHelwa — an e-commerce platform with PayPal integration and social auth.',
    technologies: [
      'Angular',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'PayPal API',
    ],
  },
];

export function Experience() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        });
      },
      { threshold: 0.1 },
    );

    const cards = document.querySelectorAll('.experience-card');
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="experience" className="bg-slate-50 py-28 dark:bg-[#0A0A14]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            Track Record
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            6+ Years. 5 Countries.{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Real Impact.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="experience-card relative md:pl-16"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Timeline dot (desktop) */}
                <div className="absolute left-[1.15rem] hidden size-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-white dark:bg-[#0A0A14] md:flex" />

                <div
                  className={`group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover dark:bg-[#0E0E1C] ${
                    exp.isCurrentRole
                      ? 'border-blue-200 dark:border-blue-500/20'
                      : 'border-gray-200/80 dark:border-white/[0.06]'
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    {/* Left */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">
                          {exp.position}
                        </h3>
                        {exp.isCurrentRole && (
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            Current
                          </span>
                        )}
                      </div>

                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {exp.company}
                        <ExternalLink className="size-3" />
                      </a>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 dark:text-white/30">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-3.5" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="my-4 text-sm leading-relaxed text-gray-500 dark:text-white/40">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-white/40 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
