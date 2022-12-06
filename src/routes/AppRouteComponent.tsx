import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainWrapper } from '../components/Base/Wrappers';

export const AppRouteComponent: React.FC = React.memo(() => {
  const renderRoutes = () => {
    return (
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    );
  };

  return renderRoutes();
});
