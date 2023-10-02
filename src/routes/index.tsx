import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/home';
import NotFound from '@/pages/NotFoundPage';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },

  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
