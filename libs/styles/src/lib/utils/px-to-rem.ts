// ========================================================================
// UTILS/PX-TO-REM
// ========================================================================

import { fontSizePx } from '../settings';

export const pxToRem = (px: number): string => {
  return `${px / fontSizePx}rem`;
};
