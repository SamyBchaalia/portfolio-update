import { Github } from 'lucide-react';

export function RepoCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <Github className="w-6 h-6 text-gray-900 dark:text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </a>
  );
}
