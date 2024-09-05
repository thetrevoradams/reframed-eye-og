'use client';

import styled from 'styled-components';
import { FontSize, FontWeight } from './types';

export const StyledText = styled.span<{
  size?: FontSize;
  weight?: FontWeight;
  isHeader: boolean;
}>`
  font-size: ${props => ` ${props.size}rem`};

  ${props => (props.weight ? `font-weight: ${props.weight}` : '')};

  font-family: ${props =>
    props.isHeader ? 'var(--font-marcellus)' : 'var(--font-marcellus)'};
`;
