// ========================================================================
// UTILS/PX-TO-EM
// ========================================================================

import { fontSizePx } from '../settings';

export const pxToEm = (px: number): string => {
  return `${px / fontSizePx}em`;
};
