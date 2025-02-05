import { FC } from 'react';

const DonatePage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">Support My Work</h1>
        <p className="text-gray-600 mt-2">
          If you find this project helpful, consider donating to support future
          development.
        </p>
        <a
          href="https://www.paypal.com/donate?hosted_button_id=6H9RCGT7KEKWL"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Donate via PayPal
        </a>
      </div>
    </div>
  );
};

export default DonatePage;
