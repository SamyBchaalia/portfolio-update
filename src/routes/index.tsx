import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import RenderRouter from './render-router';
import { Chatbot } from '@/components';

const Routes = () => {
  return (
    <Suspense fallback="loading...">
      <BrowserRouter>
        <RenderRouter />
        <Chatbot />
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
