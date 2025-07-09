'use client';

import styled from 'styled-components';
import { FontSize, FontWeight } from './types';

export const StyledText = styled.p<{
  size?: FontSize;
  weight?: FontWeight;
  center?: boolean;
  header: string;
}>`
  font-size: ${props => ` ${props.size}rem`};

  ${props => (props.weight ? `font-weight: ${props.weight}` : '')};
  ${props => (props.center ? `text-align: center` : '')};

  font-family: ${props =>
    props.header === 'true' ? 'var(--font-marcellus)' : 'var(--font-manrope)'};
`;
