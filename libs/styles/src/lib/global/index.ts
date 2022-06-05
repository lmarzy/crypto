import { createGlobalStyle } from 'styled-components';

import { tokens } from './tokens';
import { boxSizing, normalise, reset } from './base';
import { images, links, page, tables } from './elements';

export const GlobalStyles = createGlobalStyle`
  ${tokens}
  ${boxSizing}
  ${reset}
  ${normalise}
  ${page}
  ${links}
  ${images}
  ${tables}
`;
