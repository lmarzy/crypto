// ========================================================================
// CORE SETTINGS
// ========================================================================

import { BreakpointType } from './style-types';

export const baseFontSize = 16;
export const baselineHeight = 16 * 1.5;

export const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
export const fontSizePx = baseFontSize;
export const lineHeight = 1.5;
export const lineHeightPx = fontSizePx * lineHeight;

export const fontSizesPx = {
  default: 16,
  tiny: 12,
  small: 14,
  large: 20,
  huge: 28,
};

export const heightsPx = {
  inputs: 48,
};

export const gridColumns = 12;

export const breakpoints: Record<BreakpointType, number> = {
  sm: 600,
  md: 1000,
  lg: 1400,
};

export const maxWidthPx = 1200;

export const borderRadiusPx = {
  small: 8,
  large: 16,
};
