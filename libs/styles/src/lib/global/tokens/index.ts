import { colors } from './colors';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';
import { layout } from './layout';
import { spacing } from './spacing';
import { heights } from './heights';
import { borderRadius } from './misc';

export const tokens = `
  :root {
    ${fontSizes}
    ${fontWeights}
    ${spacing}
    ${layout}
    ${colors}
    ${heights}
    ${borderRadius}
  }
`;
