import Layout from '@layouts/Layout';
import AboutPage from '@pages/about/About';
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
] as RouteObject[];
