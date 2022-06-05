// ========================================================================
// GLOBAL/ELEMENTS/PAGE
// ========================================================================

// min-height - Ensures the page fills at least the entire height of the viewport
// font-size - Set to 100%, this allows the site to adapt to the font size being used by the browser instead of forcing this value on the user
// font-family -  Set to allow the font to cascade to all elements
// line-height -  For overall site line height and vertical rhytym, should be a unitless value
// color - Set for all text elements
// background-color - Set for page background colour
// -ms* - Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.

import { css } from 'styled-components';

import { fontFamily, fontSizePx, baseFontSize, lineHeight } from '../../settings';

import { theme } from '../../theme';
import { mediaQuery } from '../../utils';

export const page = css`
  html {
    position: relative;
    min-height: 100%;
    font-family: ${fontFamily};
    font-size: ${(fontSizePx / baseFontSize) * 100 + '%'};
    line-height: ${lineHeight};
    color: ${theme.colors.greyDark};
    background-color: ${theme.colors.white};

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: -300px;
      left: -300px;
      border-radius: 50%;
      z-index: -1;
    }

    &::before {
      width: 600px;
      height: 600px;
      background-color: ${theme.colors.yellow};
      opacity: 0.5;
    }

    &::after {
      width: 615px;
      height: 615px;
      border: 1px solid ${theme.colors.yellow};
    }

    ${mediaQuery('min', 'sm')} {
      &::before,
      &::after {
        top: -500px;
        left: -500px;
      }

      &::before {
        width: 1000px;
        height: 1000px;
      }

      &::after {
        width: 1015px;
        height: 1015px;
      }
    }
  }
`;
