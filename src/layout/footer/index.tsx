const FooterComponent = () => {
  return (
    <footer className="mt-8 w-full bg-gray-200 py-4 text-center text-gray-600 dark:bg-gray-800 dark:text-gray-400">
      © {new Date().getFullYear()} Sami Ben Chaalia. All rights reserved.
      <a
        href="https://sami.benchaalia.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        sami.benchaalia.com
      </a>
    </footer>
  );
};

export default FooterComponent;
