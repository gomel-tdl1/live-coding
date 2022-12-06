import styled from 'styled-components';
import { grid, flexbox } from 'styled-system';

import Box from './Box';
import { GridProps, GridWithGapProps } from './types';

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${flexbox}
  ${grid}
`;

export const GridWithGap = styled(Box)<GridWithGapProps>`
  display: grid;
  ${({ gridGaps }) => gridGaps && `grid-grap: ${gridGaps};`}
  ${({ gridRowGaps }) => gridRowGaps && `row-gap: ${gridRowGaps};`}
  ${({ gridColumnGaps }) => gridColumnGaps && `column-gap: ${gridColumnGaps};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${flexbox}
  ${grid}
`;

export default Grid;
