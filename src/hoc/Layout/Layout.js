import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Aux from '../Aux/Aux';
import Navigation from '../../components/Navigation/Navigation';
import Posts from '../../components/Posts/PostsList/PostsList';

class Layout extends Component {

  render() {
    return (
      <Aux>
        <Navigation />
        <Container>
          {this.props.children}
        </Container>
      </Aux>
    );
  }
}


export default Layout;