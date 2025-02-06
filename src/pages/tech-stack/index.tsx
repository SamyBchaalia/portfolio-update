import { FC } from 'react';
import {
  Code2,
  Database,
  Layers,
  Zap,
  Box,
  Palette,
  Workflow,
  FileCode2,
} from 'lucide-react';
import { TechCard } from '@/components/tech-card';
import { RepoCard } from '@/components/repo-card';

const TeckStack: FC = () => {
  const technologies = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: 'React',
      description:
        'A JavaScript library for building user interfaces with a declarative and component-based approach.',
      benefits: [
        'Component-based architecture',
        'Virtual DOM for optimal performance',
        'Rich ecosystem and community',
        'Seamless state management',
      ],
    },
    {
      icon: <Layers className="w-6 h-6 text-green-500" />,
      title: 'NestJS',
      description:
        'A progressive Node.js framework for building efficient and scalable server-side applications.',
      benefits: [
        'TypeScript-first development',
        'Modular architecture',
        'Built-in dependency injection',
        'Extensive middleware support',
      ],
    },
    {
      icon: <Database className="w-6 h-6 text-yellow-500" />,
      title: 'MongoDB',
      description:
        'A document database designed for ease of development and scaling with flexible schema design.',
      benefits: [
        'Schema-less database structure',
        'Horizontal scaling capabilities',
        'Rich query language',
        'High performance for large datasets',
      ],
    },
    {
      icon: <FileCode2 className="w-6 h-6 text-blue-600" />,
      title: 'TypeScript',
      description:
        'A typed superset of JavaScript that compiles to plain JavaScript, adding optional static types.',
      benefits: [
        'Static type checking',
        'Enhanced IDE support',
        'Early error detection',
        'Better code maintainability',
      ],
    },
    {
      icon: <Box className="w-6 h-6 text-red-500" />,
      title: 'ESLint & Prettier',
      description:
        'Code quality tools that help maintain consistent code style and catch potential errors.',
      benefits: [
        'Automated code formatting',
        'Customizable rule sets',
        'Integration with popular editors',
        'Consistent code style across team',
      ],
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: 'Vite',
      description:
        'A modern frontend build tool that offers a faster and leaner development experience.',
      benefits: [
        'Lightning-fast cold start',
        'Hot Module Replacement (HMR)',
        'Optimized build process',
        'Out-of-the-box TypeScript support',
      ],
    },
    {
      icon: <Palette className="w-6 h-6 text-teal-500" />,
      title: 'Tailwind CSS',
      description:
        'A utility-first CSS framework for rapidly building custom user interfaces.',
      benefits: [
        'Utility-first approach',
        'Highly customizable',
        'Small production bundle',
        'Responsive design made easy',
      ],
    },
    {
      icon: <Workflow className="w-6 h-6 text-purple-500" />,
      title: 'Development Workflow',
      description:
        'A modern development workflow that emphasizes code quality and developer experience.',
      benefits: [
        'Automated testing',
        'Continuous Integration',
        'Code review process',
        'Documentation as code',
      ],
    },
  ];
  const repositories = [
    {
      title: 'Frontend Repository',
      description:
        'React-based frontend application built with TypeScript, Vite, and Tailwind CSS. Features modern UI components and responsive design.',
      link: 'https://github.com/SamyBchaalia/arcube-frontend-test',
    },
    {
      title: 'Backend Repository',
      description:
        'NestJS backend service with MongoDB integration, RESTful API endpoints, and comprehensive documentation.',
      link: 'https://github.com/SamyBchaalia/arcube-backend-test',
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Tech Stack
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We use cutting-edge technologies to build scalable, maintainable,
            and high-performance applications. Here's what powers our
            development process.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Open Source Repositories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {repositories.map((repo, index) => (
              <RepoCard key={index} {...repo} />
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join us in creating the next generation of web applications using
            our modern tech stack.
          </p>
          <a
            href="https://sami.benchaalia.com"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Start Building
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeckStack;
