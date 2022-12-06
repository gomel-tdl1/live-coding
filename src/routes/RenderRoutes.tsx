import React from 'react';
import { useRoutes } from 'react-router-dom';

import { routesConfig } from './AppRoutes';

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */

export const RenderRootRoutes: React.FC = () => {
  const routesElement = useRoutes(routesConfig);
  return <>{routesElement}</>;
};
