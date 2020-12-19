import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">
        Home
      </NavbarBrand>
      <NavbarToggler onClick={() => toggle()} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://cypress.io">@cypress.io</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.odd-e.com">@odd-e.com</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/nerds-odd-e/cypress-techsharing">
              @github
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
