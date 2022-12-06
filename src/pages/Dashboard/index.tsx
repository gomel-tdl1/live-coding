import { ethers } from 'ethers';
import React, { useState } from 'react';

import logo from '../../assets/logo.svg';
import { swapETHToVAI } from '../../contract-services/contractServiceUniswap';
import { useWalletConnect } from '../../hooks/useWalletConnect';

export const Dashboard = () => {
  const { provider } = useWalletConnect();
  const [amount, setAmount] = useState<number>(0);

  const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseFloat(value) < 0 || value === '') {
      setAmount(0);
      return;
    }
    setAmount(parseFloat(value));
  };
  const onClickSwap = async () => {
    if (!provider) return;
    const amountIn = ethers.utils.parseUnits(amount.toString(), 18);
    await swapETHToVAI(amountIn, provider);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="number" value={amount} onChange={onAmountChange} />
        <button onClick={onClickSwap}>Swap</button>
      </header>
    </div>
  );
};
