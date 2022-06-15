import { theme } from '@crypto/styles';
import styled, { keyframes } from 'styled-components';

const example = keyframes`
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding-top: ${theme.spacings[2]};
  padding-bottom: ${theme.spacings[2]};
  margin-bottom: ${theme.spacings[4]};
`;

export const StyledLogo = styled.div`
  width: 90px;
  transform: translateX(-25px) rotate(-90deg);
  opacity: 0.2;
  animation: ${example} 2s forwards;
`;

export const StyledLink = styled.a`
  margin-left: auto;
  color: ${theme.colors.greyDark};
  text-decoration: underline;
`;
