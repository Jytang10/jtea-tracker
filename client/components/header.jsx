import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';
function Header(props) {
  return (
    <div>
      <Navbar color="light">
        <NavbarBrand href="#">JTea Tracker</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;
