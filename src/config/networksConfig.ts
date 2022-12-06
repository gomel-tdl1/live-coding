import { BigNumber } from 'ethers';

import { NetworkType } from '../interfaces/INetworks';

// MAINNETS ----------------------------------------------------------
export const EthereumMainnetConfig: NetworkType = {
  nameForDisplay: 'mainnet',
  config: {
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    rpcUrls: [
      'https://eth-mainnet.alchemyapi.io/v2/xD6ljTKosJH4LJ0QJedVyf1uxMNYh8PE',
      'https://mainnet.infura.io/v3/a71e825becd54bd3a99b52ebdd43fa12',
    ],
    blockExplorerUrls: ['https://etherscan.io/'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
};
export const OptimismConfig: NetworkType = {
  nameForDisplay: 'optimism',
  config: {
    chainId: '0xa',
    chainName: 'Optimistic Ethereum',
    rpcUrls: ['https://mainnet.optimism.io'],
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
};
export const FantomConfig: NetworkType = {
  nameForDisplay: 'fantom',
  config: {
    chainId: BigNumber.from(250).toHexString(),
    chainName: 'Fantom Opera',
    rpcUrls: ['https://rpc.ftm.tools/'],
    blockExplorerUrls: ['https://ftmscan.com/'],
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
  },
};

// TESTNETS ----------------------------------------------------------
export const GoerliConfig: NetworkType = {
  nameForDisplay: 'goerli',
  config: {
    chainId: '0x5',
    chainName: 'Goerli Test Network',
    rpcUrls: [
      'https://eth-goerli.alchemyapi.io/v2/Y8ixPDj_tY0wJ6EMQoe_Q54KLvh6kB8f',
      'https://goerli.infura.io/v3/a71e825becd54bd3a99b52ebdd43fa12',
    ],
    blockExplorerUrls: ['https://goerli.etherscan.io/'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
};

// TIMEMACHINE---------------------------------------------------------

export const TimeMachineConfig: NetworkType = {
  nameForDisplay: 'goerli',
  config: {
    chainId: BigNumber.from(31337).toHexString(),
    chainName: 'Goerli Test Network',
    rpcUrls: ['http://localhost:8545'],
    blockExplorerUrls: ['https://goerli.etherscan.io/'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
};
