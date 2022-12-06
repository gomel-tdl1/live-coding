import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { AppRouteComponent } from './AppRouteComponent';
import { Routes } from './config';

import { Dashboard } from '../pages/Dashboard';

export const routesConfig: RouteObject[] = [
  {
    path: Routes.App,
    element: <AppRouteComponent />,
    children: [
      {
        path: Routes.App,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={Routes.App} replace />,
  },
];
