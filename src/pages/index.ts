import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));

const DonatePage = lazy(() => import('@/pages/donate'));

const TeckStack = lazy(() => import('@/pages/tech-stack'));
const Docs = lazy(() => import('@/pages/docs'));
export { Home, DonatePage, TeckStack, Docs };
