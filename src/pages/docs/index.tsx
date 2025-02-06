import { FC } from 'react';

const Docs: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <iframe
        src="https://arcube.benchaalia.com/docs"
        title="Swagger API Docs"
        className="w-full h-full border rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Docs;
