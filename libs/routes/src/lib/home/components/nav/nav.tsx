import { StyledNav, StyledLinkElephant, StyledLinkDrip } from './nav.styled';

export const Nav = () => (
  <StyledNav>
    <li>
      <StyledLinkElephant to="/elephant/stampede">Elephant</StyledLinkElephant>
    </li>
    {/* <li>
      <StyledLinkDrip to="/drip">Drip</StyledLinkDrip>
    </li> */}
  </StyledNav>
);
