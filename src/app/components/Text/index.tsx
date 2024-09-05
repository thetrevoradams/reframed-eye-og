'use client';
import React, { ReactNode } from 'react';
import {
  FontSize,
  FontSizes,
  FontWeight,
  HeaderElements,
  TextElement,
  TextElements,
} from './types';
import { StyledText } from './styles';

export interface TextProps {
  el: TextElement;
  styleAs?: TextElement;
  weight?: FontWeight;
  children?: ReactNode;
}

export function isHeaderEl(el: TextElement) {
  const isHeader = Object.values(HeaderElements).find(header => header === el);
  return !!isHeader;
}

export function getDefaultSize(el: TextElement) {
  switch (el) {
    case TextElements.H1:
      return FontSizes['4xl'];
    case TextElements.H2:
      return FontSizes['3xl'];
    case TextElements.H3:
      return FontSizes['2xl'];
    case TextElements.H4:
      return FontSizes.xl;
    case TextElements.H5:
      return FontSizes.lg;
    case TextElements.H6:
      return FontSizes.sm;
    case TextElements.P:
    case TextElements.Label:
    case TextElements.Span:
      return FontSizes.base;
    default:
      return undefined;
  }
}

export const Text = ({ el, styleAs, weight, children }: TextProps) => {
  const isHeader = isHeaderEl(el);
  const size = getDefaultSize(styleAs ?? el);

  return (
    <StyledText
      {...(isHeader ? { role: 'heading' } : {})}
      size={size}
      weight={weight}
      isHeader={isHeader}
    >
      {children}
    </StyledText>
  );
};
