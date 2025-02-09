import { FC } from 'react';

const DonatePage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md rounded-2xl bg-white p-6 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Support My Work</h1>
        <p className="mt-2 text-gray-600">
          If you find this project helpful, consider donating to support future
          development.
        </p>
        <a
          href="https://www.paypal.com/donate?hosted_button_id=D56LV2NJ87FYE"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-600"
        >
          Donate via PayPal
        </a>
      </div>
    </div>
  );
};

export default DonatePage;
