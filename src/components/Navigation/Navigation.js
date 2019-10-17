import React from 'react';
import { 
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navigation = props => {

  return (
    <Navbar bg="dark" expand="lg" fixed="top" className="navbar-dark text-white">
      <LinkContainer to ="/">
        <Navbar.Brand>pastowo.com</Navbar.Brand>
      </LinkContainer>
      
      <Button variant="outline-success">Search</Button>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navigation;