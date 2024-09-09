'use client';

import styled from 'styled-components';
import { FontSize, FontWeight } from './types';

export const StyledText = styled.p<{
  size?: FontSize;
  weight?: FontWeight;
  center?: boolean;
  isHeader: boolean;
}>`
  font-size: ${props => ` ${props.size}rem`};

  ${props => (props.weight ? `font-weight: ${props.weight}` : '')};
  ${props => (props.center ? `text-align: center` : '')};

  font-family: ${props =>
    props.isHeader ? 'var(--font-marcellus)' : 'var(--font-manrope)'};
`;
