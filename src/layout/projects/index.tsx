import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Project Name',
      description: 'A brief description of the project and its impact.',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="translate-y-4 p-6 text-white transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="mb-4 flex space-x-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-colors hover:text-blue-400"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-colors hover:text-blue-400"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
