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
      className="block rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
    >
      <div className="mb-4 flex items-center space-x-4">
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
          <Github className="size-6 text-gray-900 dark:text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </a>
  );
}
