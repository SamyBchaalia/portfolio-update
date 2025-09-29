import { ReactNode } from 'react';

import { AlertTriangle, RefreshCw } from 'lucide-react';
import { FallbackProps } from 'react-error-boundary';

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  // In production, this would be sent to an error tracking service
  // Logging is disabled due to no-console rule

  return (
    <div
      role="alert"
      className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900"
    >
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="mb-4 flex items-center justify-center">
          <AlertTriangle className="size-12 text-red-500" />
        </div>
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Oops! Something went wrong
        </h1>
        <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
          We encountered an unexpected error. Please try refreshing the page.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-6 rounded-md bg-red-50 p-4 dark:bg-red-900/20">
            <summary className="cursor-pointer font-medium text-red-800 dark:text-red-200">
              Error details
            </summary>
            <pre className="mt-2 overflow-auto text-sm text-red-600 dark:text-red-400">
              {(error as Error).message}
            </pre>
          </details>
        )}
        <button
          onClick={resetErrorBoundary}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          <RefreshCw className="size-4" />
          Try Again
        </button>
      </div>
    </div>
  );
};

const fallbackRender: (props: FallbackProps) => ReactNode = FallbackComponent;

export default fallbackRender;
