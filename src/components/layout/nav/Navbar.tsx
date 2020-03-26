import * as React from 'react';
import { StyledNav, NavTitle } from './StyledNav';

interface Props {

}

const NavBar: React.FC<Props> = () => (
  <StyledNav>
    <NavTitle>
      <h4>Linked Form</h4>
    </NavTitle>
  </StyledNav>
);
export default NavBar;
