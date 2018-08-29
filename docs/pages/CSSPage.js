import React from 'react';
import {Container, Row, Col, Jumbotron, Fa, NavItem, NavLink} from 'mdbreact';

class CSSPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mx-auto">
            <Jumbotron className="mt-3">
              <h1><Fa icon="css3" className="grey-text" /> CSS</h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/css/animations">
                    <h5 className="justify-content-between d-flex align-items-center">Animation<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/css/hover">
                    <h5 className="justify-content-between d-flex align-items-center">Hover effects<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/css/icons">
                    <h5 className="justify-content-between d-flex align-items-center">Icons<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/css/jumbotron">
                    <h5 className="justify-content-between d-flex align-items-center">Jumbotron<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/css/masks">
                    <h5 className="justify-content-between d-flex align-items-center">Masks<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CSSPage;
