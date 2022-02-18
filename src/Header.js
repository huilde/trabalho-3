import {Link} from "react-router-dom"
import { useState } from "react";
import { Navbar, DropdownItem, NavbarText, NavLink, Collapse,NavbarBrand, Nav,NavItem, NavbarToggler, DropdownMenu, DropdownToggle,UncontrolledDropdown } from 'reactstrap';
function Header() {
  return (
    <div>
  <Navbar
    color="primary"
    dark
    full
    light
    expand="md"

    
  >
    <NavbarBrand href="/">
      Apresentação
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/Noticias">
          Notícias
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="./Filmes">
            Filmes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="./Calendario">
          Calendario
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="./Documentos">
          Documentos
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
  );
}

export default Header;
