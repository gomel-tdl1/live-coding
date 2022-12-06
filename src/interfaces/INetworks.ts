export interface NetworkConfigType {
  chainId: string;
  rpcUrls: string[];
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls: string[];
}

export interface NetworkType {
  nameForDisplay: string;
  config: NetworkConfigType;
}

export interface SupportedChainIdsType {
  [id: number]: NetworkType;
}
