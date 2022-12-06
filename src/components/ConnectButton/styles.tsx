import styled from 'styled-components';

import { Flex } from '../Base';

export const StyledConnectButton = styled.button`
  appearance: none;
  height: 100px;
  border-radius: 20px;
  background-color: burlywood;

  font-size: 30px;
  color: black;
  font-weight: 700;
  padding: 10px;
`;

export const ChangeNetworkButtonWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
