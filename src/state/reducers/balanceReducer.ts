import { createSlice } from '@reduxjs/toolkit';

import { fetchBalance } from '../actions/balanceActions';

interface IInitialState {
  balanceNative: string;
}

const initialState: IInitialState = {
  balanceNative: '0',
};

export const tokenSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    resetCoin: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBalance.fulfilled, (state, action) => {
      state.balanceNative = action.payload;
    });
  },
});

export default tokenSlice.reducer;
export const { resetCoin } = tokenSlice.actions;
