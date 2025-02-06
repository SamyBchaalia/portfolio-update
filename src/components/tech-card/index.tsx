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
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li
            key={index}
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
