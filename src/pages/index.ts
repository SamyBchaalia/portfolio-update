import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));

const DonatePage = lazy(() => import('@/pages/donate'));

export { Home, DonatePage };
