// ========================================================================
// UTILS/VR - VERTICAL RHYTHM
// ========================================================================

import { FontSizeType } from '../style-types';

import { baselineHeight, fontSizesPx } from '../settings';

export const vr = (size: FontSizeType): number => {
  return Math.ceil(fontSizesPx[size] / baselineHeight) * (baselineHeight / fontSizesPx[size]);
};
