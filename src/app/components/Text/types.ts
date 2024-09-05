export const HeaderElements = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
} as const;
export type HeaderElement =
  (typeof HeaderElements)[keyof typeof HeaderElements];

export const TextElements = {
  Div: 'div',
  Span: 'span',
  P: 'p',
  Label: 'label',
  ...HeaderElements,
} as const;
export type TextElement = (typeof TextElements)[keyof typeof TextElements];

export const FontSizes = {
  sm: 0.75, // 12px / small
  base: 1, // 16px / body
  lg: 1.25, // 20px / title2
  xl: 1.5, // 24px / potentially deprecate
  '2xl': 1.75, // 28px / title1
  '3xl': 2.25, // 36px / potentially deprecate
  '4xl': 2.75, // 44px / hero
} as const;
export type FontSizeName = keyof typeof FontSizes;
export type FontSize = (typeof FontSizes)[FontSizeName];

export const FontWeights = {
  Regular: 400,
  Bold: 700,
} as const;
export type FontWeight = (typeof FontWeights)[keyof typeof FontWeights];
