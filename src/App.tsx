import { Web3ReactProvider } from '@web3-react/core';
import { providers } from 'ethers';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RenderRootRoutes } from './routes/RenderRoutes';
import { ReduxProvider } from './state/ReduxProvider';

import './App.css';

const getLibrary = (
  provider: providers.ExternalProvider | providers.JsonRpcFetchFunc,
): providers.Web3Provider => new providers.Web3Provider(provider);

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ReduxProvider>
        <BrowserRouter>
          <RenderRootRoutes />
        </BrowserRouter>
      </ReduxProvider>
    </Web3ReactProvider>
  );
}

export default App;
