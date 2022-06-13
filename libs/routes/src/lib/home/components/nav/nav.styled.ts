import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '@crypto/styles';

export const StyledNav = styled.li`
  width: 100%;
  max-width: 300px;
  list-style: none;

  li:not(:last-child) {
    margin-bottom: ${theme.spacings[4]};
  }
`;

export const StyledLink = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${theme.heights.inputs};
  border-radius: ${theme.borderRadius.large};
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
  transition: box-shadow 200ms ease-in;

  &:hover,
  &:focus {
    box-shadow: none;
  }
`;

export const StyledLinkElephant = styled(NavLink)`
  ${StyledLink};
  background-color: ${theme.colors.elephant};
  color: ${theme.colors.black};
`;

export const StyledLinkDrip = styled(NavLink)`
  ${StyledLink};
  background-color: ${theme.colors.drip};
  color: ${theme.colors.white};
`;
