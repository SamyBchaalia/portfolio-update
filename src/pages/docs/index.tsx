import { FC } from 'react';

const Docs: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <iframe
        src="https://arcube.benchaalia.com/docs"
        title="Swagger API Docs"
        className="size-full rounded-lg border shadow-lg"
      />
    </div>
  );
};

export default Docs;
