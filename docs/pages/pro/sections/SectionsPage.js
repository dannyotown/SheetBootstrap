import React from 'react';
import { Container, Row, Col, Jumbotron, Fa, NavItem, NavLink } from 'mdbreact';

class SectionsPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1><Fa icon="th" className="grey-text" /> Sections</h1>
              <ul className="list-unstyled example-components-list">
                <h5 className="grey-text">Intros </h5>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/sections/app">
                    <h5 className="justify-content-between d-flex align-items-center">App intro<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/sections/contactform">
                    <h5 className="justify-content-between d-flex align-items-center">Contact Form intro<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/sections/classicform">
                    <h5 className="justify-content-between d-flex align-items-center">Classic Register Form intro<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/sections/videobackground">
                    <h5 className="justify-content-between d-flex align-items-center">Video Background intro<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/contact">
                    <h5 className="justify-content-between d-flex align-items-center">Contact<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/blog">
                    <h5 className="justify-content-between d-flex align-items-center">Blog<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/ecommerce">
                    <h5 className="justify-content-between d-flex align-items-center">E-commerce<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/features">
                    <h5 className="justify-content-between d-flex align-items-center">Features<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/magazine">
                    <h5 className="justify-content-between d-flex align-items-center">Magazine<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/projects">
                    <h5 className="justify-content-between d-flex align-items-center">Projects<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/social">
                    <h5 className="justify-content-between d-flex align-items-center">Social<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/team">
                    <h5 className="justify-content-between d-flex align-items-center">Team<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/testimonials">
                    <h5 className="justify-content-between d-flex align-items-center">Testimonials<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="sections/testimonialsMulti">
                    <h5 className="justify-content-between d-flex align-items-center">Testimonials Multi Item<Fa icon="angle-right" /></h5>
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

export default SectionsPage;
