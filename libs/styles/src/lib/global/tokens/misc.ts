import { borderRadiusPx } from '../../settings';
import { pxToRem } from '../../utils';

export const borderRadius = `
  --border-radius-small: ${pxToRem(borderRadiusPx.small)};
  --border-radius-large: ${pxToRem(borderRadiusPx.large)};
`;
