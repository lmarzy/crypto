// ========================================================================
// TOKENS/SPACING
// ========================================================================

import { lineHeightPx } from '../../settings';
import { pxToRem } from '../../utils';

const multiplier = lineHeightPx / 4;

export const spacing = `
--spacing-1: ${pxToRem(multiplier * 1)};
--spacing-2: ${pxToRem(multiplier * 2)};
--spacing-3: ${pxToRem(multiplier * 3)};
--spacing-4: ${pxToRem(multiplier * 4)};
--spacing-5: ${pxToRem(multiplier * 5)};
--spacing-6: ${pxToRem(multiplier * 6)};
`;
