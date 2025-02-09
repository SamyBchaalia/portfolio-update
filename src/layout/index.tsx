import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import fallbackRender from './error-boundary/fallbackRender';
import FooterComponent from './footer';
import HeaderComponent from './header';

const LayoutComponent = () => {
  return (
    <div className="size-full">
      <HeaderComponent />
      <div className="flex min-h-[calc(100vh-200px)] flex-col px-4 py-20">
        <ErrorBoundary fallbackRender={fallbackRender}>
          <Suspense
            fallback={
              <div className="flex size-full items-center justify-center">
                <span>Loading...</span>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
