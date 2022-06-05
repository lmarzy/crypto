import { NavLink } from 'react-router-dom';

import { StyledNav, StyledNavList } from './nav.styled';

export const Nav = () => (
  <StyledNav>
    <StyledNavList>
      <li>
        <NavLink to="/elephant/stampede">Stampede</NavLink>
      </li>
      <li>
        <NavLink to="/elephant/stake">Stake</NavLink>
      </li>
    </StyledNavList>
  </StyledNav>
);
