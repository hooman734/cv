import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComp = function() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">.: Hooman Hesamyan :.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#PersonalInfo">About Me</Nav.Link>
          <Nav.Link href="#Contact">Contact Info</Nav.Link>
          <NavDropdown title="Sections" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#Education">Education</NavDropdown.Item>
            <NavDropdown.Item href="#Knowledge">Knowledge</NavDropdown.Item>
            <NavDropdown.Item href="#ProfessionalExp">
              Professional Expperince
            </NavDropdown.Item>
            <NavDropdown.Item href="#AccomplishedProject">
              Finished Pprojects
            </NavDropdown.Item>
            <NavDropdown.Item href="#Skill">Developing Skills</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="mailto: hooman@hesamian.com">
              Email Me!
            </NavDropdown.Item>
            <NavDropdown.Item href="tel: +37477281734">
              Call Me!
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="https://hooman734.github.io/">
            <i class="fa fa-home"></i> Back Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
