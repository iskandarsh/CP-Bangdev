import Layout from '@layouts/Layout';
import AboutPage from '@pages/about';
import CareerPage from '@pages/career';
import HomePage from '@pages/home';
import { RouteObject } from 'react-router-dom';

export default [
  // Home
  {
    path: '/',
    element: <Layout component={<HomePage />} />,
  },
  {
    path: '/about',
    element: <Layout component={<AboutPage />} />,
  },
  {
    path: '/career',
    element: <Layout component={<CareerPage />} />,
  },
] as RouteObject[];
