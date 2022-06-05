// ========================================================================
// TOKENS/LAYOUT
// ========================================================================

import { pxToRem } from '../../utils';

import { maxWidthPx } from '../../settings';

export const layout = `
  --max-width: ${pxToRem(maxWidthPx)};
`;
