import { AbstractConnector } from '@web3-react/abstract-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

import { IWallet } from '../interfaces/IWallet';

export const useWalletConnect = (): IWallet => {
  const { account, activate, active, deactivate, chainId, library } =
    useWeb3React();

  const activateWallet = async (connector: AbstractConnector) => {
    try {
      await activate(connector, undefined, true);
    } catch (e) {
      if (e instanceof UnsupportedChainIdError) {
        console.error(e);
      }
    }
  };

  return {
    account: account || '',
    activateWallet,
    active,
    chainId,
    deactivate,
    provider: library as ethers.providers.Web3Provider | null,
  };
};
