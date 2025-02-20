import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));

const DonatePage = lazy(() => import('@/pages/donate'));

const TeckStack = lazy(() => import('@/pages/tech-stack'));
const Docs = lazy(() => import('@/pages/docs'));
const ContactPage = lazy(() => import('@/pages/contact'));
const AwardsPage = lazy(() => import('@/pages/awards'));
const PortfolioPage = lazy(() => import('@/pages/portfolio'));

export {
  Home,
  DonatePage,
  TeckStack,
  Docs,
  ContactPage,
  AwardsPage,
  PortfolioPage,
};
