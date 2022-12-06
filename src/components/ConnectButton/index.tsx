import React, { FC, useEffect } from 'react';

import { StyledConnectButton } from './styles';

import {
  injected,
  removeWeb3WalletType,
  setWeb3WalletType,
  Web3WalletType,
} from '../../config/walletsConfig';
import { useWalletConnect } from '../../hooks/useWalletConnect';
import { fetchBalance } from '../../state/actions/balanceActions';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { Flex } from '../Base';

export const ConnectButton: FC = () => {
  const balanceNative = useAppSelector((state) => state.balance.balanceNative);
  const dispatch = useAppDispatch();
  const { activateWallet, active, deactivate, account, provider } =
    useWalletConnect();

  const connectInjected = async () => {
    await activateWallet(injected)
      .then(() => setWeb3WalletType(Web3WalletType.INJECTED))
      .catch(() => removeWeb3WalletType());
  };

  const disconnect = () => {
    deactivate();
    removeWeb3WalletType();
  };

  useEffect(() => {
    if (provider) dispatch(fetchBalance({ account, provider }));
  }, [account, provider]);

  const onClick = async () => {
    if (active) {
      disconnect();
      return;
    }
    await connectInjected();
  };

  return (
    <StyledConnectButton onClick={onClick}>
      {active && (
        <Flex flexDirection="column">
          <div>
            {account.slice(0, 7).toUpperCase()}
            ...
            {account.slice(-4).toUpperCase()}
          </div>
          <div>{balanceNative} ETH</div>
        </Flex>
      )}
      {!active && 'Connect'}
    </StyledConnectButton>
  );
};
