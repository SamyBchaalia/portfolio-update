import { Suspense, lazy } from 'react';

import { BrowserRouter } from 'react-router-dom';

import RenderRouter from './render-router';

// Lazy load the Chatbot component for better performance
const Chatbot = lazy(() =>
  import('@/components/chat-bot').then((module) => ({
    default: module.Chatbot,
  })),
);

const Routes = () => {
  return (
    <Suspense fallback="loading...">
      <BrowserRouter>
        <RenderRouter />
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
