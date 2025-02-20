interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export function TechCard({
  icon,
  title,
  description,
  benefits,
}: TechCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
      <div className="mb-4 flex items-center space-x-4">
        <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/30">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-center text-gray-600 dark:text-gray-300"
          >
            <span className="mr-2 text-blue-500">•</span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
