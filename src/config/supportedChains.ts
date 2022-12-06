import { GoerliConfig } from './networksConfig';

import { SupportedChainIdsType } from '../interfaces/INetworks';

export const CHAINS_CONFIG: SupportedChainIdsType = {
  [5]: GoerliConfig,
};

export const SUPPORTED_CHAINS: number[] = Object.keys(CHAINS_CONFIG).map(
  (key) => +key,
);
