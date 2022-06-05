import { StyledHeader, StyledLogo, StyledLink } from './header.styled';

export const Header = () => (
  <StyledHeader>
    <StyledLogo>
      <img src="/assets/logo-elephant.svg" alt="Elephant Logo" />
    </StyledLogo>
    <StyledLink href="http://elephant.money">elephant.money</StyledLink>
  </StyledHeader>
);
