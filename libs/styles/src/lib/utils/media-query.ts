import { BreakpointType } from '../style-types';

import { pxToEm } from '.';
import { breakpoints } from '../settings';

export const mediaQuery = (type: 'min' | 'max', bp: BreakpointType): string => {
  return `@media (${type}-width: ${pxToEm(breakpoints[bp])})`;
};
