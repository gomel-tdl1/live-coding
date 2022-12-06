import { BigNumber } from 'ethers';
import React, { FC, useEffect, useMemo } from 'react';

import { ChangeNetworkButtonWrapper, StyledConnectButton } from './styles';

import { CHAINS_CONFIG, SUPPORTED_CHAINS } from '../../config/supportedChains';
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
  const { activateWallet, active, deactivate, account, provider, chainId } =
    useWalletConnect();

  const isChainSupported = useMemo<boolean>(() => {
    if (!chainId) return false;
    return SUPPORTED_CHAINS.includes(chainId);
  }, [chainId]);

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

  const onClickChangeNetwork = async () => {
    try {
      console.log(BigNumber.from(SUPPORTED_CHAINS[0]).toHexString());
      await provider?.send('wallet_switchEthereumChain', [
        { chainId: CHAINS_CONFIG[SUPPORTED_CHAINS[0]].config.chainId },
      ]);
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (err.code === 4902) {
        await provider?.send('wallet_addEthereumChain', [
          CHAINS_CONFIG[SUPPORTED_CHAINS[0]],
        ]);
      }
    }
  };

  return (
    <>
      {!isChainSupported && active && (
        <ChangeNetworkButtonWrapper>
          <StyledConnectButton onClick={onClickChangeNetwork}>
            Switch network to{' '}
            {CHAINS_CONFIG[SUPPORTED_CHAINS[0]].nameForDisplay}
          </StyledConnectButton>
        </ChangeNetworkButtonWrapper>
      )}
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
    </>
  );
};
