import React, { FC } from 'react';

import { HeaderContainer } from './styles';

import { ConnectButton } from '../../components/ConnectButton';

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <ConnectButton />
    </HeaderContainer>
  );
};
