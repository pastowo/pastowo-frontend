import React from 'react';
import { 
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Navigation.module.css';

const navigation = props => {

  return (
    <Navbar expand="lg" fixed="top" className={"navbar-dark text-white "+classes.Navigation}>
      <LinkContainer to ="/">
        <Navbar.Brand>pastowo.com</Navbar.Brand>
      </LinkContainer>
      
      <Button variant="outline-success">
        <FontAwesomeIcon icon={['fas', 'search']} /> Search
      </Button>
      <Navbar.Toggle aria-controls="main-navbar-nav" />

      <Navbar.Collapse id="main-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/home">
            <Nav.Link><FontAwesomeIcon icon={['fas', 'home']} /> Home</Nav.Link>
          </LinkContainer>
          <NavDropdown title={<React.Fragment><FontAwesomeIcon icon={['fas', 'compass']} /> Explore</React.Fragment>} id="main-nav-dropdown">
            <LinkContainer to="/pastes">
              <NavDropdown.Item>
                <FontAwesomeIcon icon={['fas', 'align-center']} />  paste
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/series">
              <NavDropdown.Item>
                <FontAwesomeIcon icon={['fas', 'book']} />  series
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/users">
              <NavDropdown.Item>
                <FontAwesomeIcon icon={['fas', 'users']} />  users
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/add">
            <Nav.Link>
            <FontAwesomeIcon icon={['fas', 'plus-circle']} />  Add
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signin">
            <Nav.Link>
              <FontAwesomeIcon icon={['fas', 'sign-in-alt']} />  Sign in
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link>
              <FontAwesomeIcon icon={['fas', 'user-plus']} />  Sign up
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navigation;