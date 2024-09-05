import Layout from '@layouts/Layout';
import AboutPage from '@pages/about';
import CareerPage from '@pages/career';
import DetailCareerPage from '@pages/career/detail';
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

    children: [
      { index: true, element: <Layout component={<CareerPage />} /> },
      {
        path: ':id',
        element: <Layout component={<DetailCareerPage />} />,
      },
    ],
  },
] as RouteObject[];