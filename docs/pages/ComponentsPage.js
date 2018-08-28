import React from 'react';
import { Container, Row, Col, Jumbotron, Fa, NavItem, NavLink } from 'mdbreact';


class ComponentsPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1><Fa icon="cubes" className="grey-text" /> Components</h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/alert">
                    <h5 className="justify-content-between d-flex align-items-center">Alert<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/badge">
                    <h5 className="justify-content-between d-flex align-items-center">Badge<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/buttons">
                    <h5 className="justify-content-between d-flex align-items-center">Buttons<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/cards">
                    <h5 className="justify-content-between d-flex align-items-center">Cards<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/dropdown">
                    <h5 className="justify-content-between d-flex align-items-center">Dropdown<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/list-group">
                    <h5 className="justify-content-between d-flex align-items-center">List group<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/media">
                    <h5 className="justify-content-between d-flex align-items-center">Media<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/panels">
                    <h5 className="justify-content-between d-flex align-items-center">Panels<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pagination">
                    <h5 className="justify-content-between d-flex align-items-center">Pagination<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>

                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/progress">
                    <h5 className="justify-content-between d-flex align-items-center">Progress<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/search">
                    <h5 className="justify-content-between d-flex align-items-center">Search<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>


                <h6 className="mt-3 grey-text">PRO </h6>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pro/buttons">
                    <h5 className="justify-content-between d-flex align-items-center">Buttons<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pro/cards">
                    <h5 className="justify-content-between d-flex align-items-center">Cards<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pro/chips">
                    <h5 className="justify-content-between d-flex align-items-center">Chips<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pro/dropdown">
                    <h5 className="justify-content-between d-flex align-items-center">Material Dropdown<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pro/progress">
                    <h5 className="justify-content-between d-flex align-items-center">Progress<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pro/search">
                    <h5 className="justify-content-between d-flex align-items-center">Search<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pro/socialbuttons">
                    <h5 className="justify-content-between d-flex align-items-center">Social Buttons<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pro/stepper">
                    <h5 className="justify-content-between d-flex align-items-center">Stepper<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/components/pro/tabs">
                    <h5 className="justify-content-between d-flex align-items-center">Tabs<Fa icon="angle-right" /></h5>
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

export default ComponentsPage;
