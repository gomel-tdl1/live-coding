import {
  EthereumMainnetConfig,
  FantomConfig,
  GoerliConfig,
  OptimismConfig,
} from './networksConfig';

import { SupportedChainIdsType } from '../interfaces/INetworks';

export const CHAINS_CONFIG: SupportedChainIdsType = {
  [1]: EthereumMainnetConfig,
  [10]: OptimismConfig,
  [250]: FantomConfig,
  [5]: GoerliConfig,
};

export const SUPPORTED_CHAINS: number[] = Object.keys(CHAINS_CONFIG).map(
  (key) => +key,
);
