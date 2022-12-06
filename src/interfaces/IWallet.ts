import { AbstractConnector } from '@web3-react/abstract-connector';
import { ethers } from 'ethers';

export interface IWallet {
  account: string;
  activateWallet: (connector: AbstractConnector) => Promise<void>;
  active: boolean;
  chainId: number | undefined;
  deactivate: () => void;
  provider: ethers.providers.Web3Provider | null;
}
