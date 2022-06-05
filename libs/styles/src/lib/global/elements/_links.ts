// ========================================================================
// GLOBAL/ELEMENTS/LINKS
// ========================================================================

import { css } from 'styled-components';

import { theme } from '../../theme';

// Set default colour
// Remove the gray background on active links in IE 10.
// Set text decoration

export const links = css`
  a {
    color: ${theme.colors.greyDark};
    background-color: transparent;
    text-decoration: none;
    transition: $transition;
  }
`;
