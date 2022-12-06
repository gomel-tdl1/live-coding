import styled from 'styled-components';

import Flex from './Flex';

export const MainWrapper = styled(Flex)`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
`;
export const ContentWrapper = styled(Flex)`
  padding: 30px 0;
  width: 100%;
  max-width: 1132px;
  flex-direction: column;
  margin: 0 auto;
  flex: 1;
`;
