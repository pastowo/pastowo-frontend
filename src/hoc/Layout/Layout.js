import React, { Component, Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Navigation from '../../components/Navigation/Navigation';
import Posts from '../../components/Posts/PostsList/PostsList';

class Layout extends Component {

  render() {
    return (
      <Fragment>
        <Navigation />
        <Container>
          {this.props.children}
        </Container>
      </Fragment>
    );
  }
}


export default Layout;