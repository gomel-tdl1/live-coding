import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainWrapper } from '../components/Base/Wrappers';
import { Header } from '../pages/Header';

export const AppRouteComponent: React.FC = React.memo(() => {
  const renderRoutes = () => {
    return (
      <MainWrapper>
        <Header />
        <Outlet />
      </MainWrapper>
    );
  };

  return renderRoutes();
});
