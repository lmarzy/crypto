import styled from 'styled-components';

import { mediaQuery, theme } from '@crypto/styles';

export const StyledNav = styled.nav`
  height: 100%;
  background-color: ${theme.colors.white};
  padding: ${theme.spacings[1]};
  border-radius: ${theme.borderRadius.small};
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${theme.spacings[2]};

  li {
    width: 100%;
  }

  a {
    display: block;
    padding: ${theme.spacings[2]};
    text-align: center;

    &.active {
      color: ${theme.colors.black};
      background-color: ${theme.colors.greyMedium};
      border-radius: ${theme.borderRadius.small};
      font-weight: ${theme.fontWeights.bold};
    }
  }

  ${mediaQuery('min', 'sm')} {
    flex-direction: column;

    a {
      text-align: left;
    }
  }
`;
