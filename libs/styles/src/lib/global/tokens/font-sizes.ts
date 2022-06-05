// ========================================================================
// THEME/FONT-SIZES
// ========================================================================

import { fontSizesPx } from '../../settings';
import { pxToRem } from '../../utils';

export const fontSizes = `
  --size-default: ${pxToRem(fontSizesPx.default)};
  --size-tiny: ${pxToRem(fontSizesPx.tiny)};
  --size-small: ${pxToRem(fontSizesPx.small)};
  --size-large: ${pxToRem(fontSizesPx.large)};
  --size-huge: ${pxToRem(fontSizesPx.huge)};
`;
