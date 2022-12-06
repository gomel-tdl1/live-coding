import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

interface IBalanceAction {
  account: string;
  provider: ethers.providers.Web3Provider;
}

export const fetchBalance = createAsyncThunk<string, IBalanceAction>(
  'getTokenDetails',
  async ({ account, provider }) => {
    const balanceBN = await provider.getBalance(account);
    return ethers.utils.formatEther(balanceBN);
  },
);
