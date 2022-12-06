import { InjectedConnector } from '@web3-react/injected-connector';

import { CHAINS_CONFIG, SUPPORTED_CHAINS } from './supportedChains';

export const getRpcUrlByChainId = (
  chainId: number,
  rpcUrlIndex = 0,
): string => {
  return CHAINS_CONFIG[chainId].config.rpcUrls[rpcUrlIndex];
};

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAINS.concat(),
});

const Web3WalletTypeName = 'web3_wallet_type';

export const getWeb3WalletType = (): string | null =>
  window.localStorage.getItem(Web3WalletTypeName);
export const setWeb3WalletType = (type: Web3WalletType): void =>
  window.localStorage.setItem(Web3WalletTypeName, type);
export const removeWeb3WalletType = (): void =>
  window.localStorage.removeItem(Web3WalletTypeName);

export enum Web3WalletType {
  INJECTED = 'INJECTED',
}
