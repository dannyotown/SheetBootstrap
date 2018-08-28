import React from 'react';
import { Container, Row, Col, Jumbotron, Fa, NavItem, NavLink } from 'mdbreact';

class AdvancedPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1><Fa icon="code" className="grey-text" /> Advanced</h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/carousel">
                    <h5 className="justify-content-between d-flex align-items-center">Carousel<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/charts">
                    <h5 className="justify-content-between d-flex align-items-center">Charts<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/collapse">
                    <h5 className="justify-content-between d-flex align-items-center">Collapse<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/popover">
                    <h5 className="justify-content-between d-flex align-items-center">Popover<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/tooltips">
                    <h5 className="justify-content-between d-flex align-items-center">Tooltips<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/videocarousel">
                    <h5 className="justify-content-between d-flex align-items-center">Video Carousel<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <h6 className="mt-3 grey-text">PRO </h6>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/pro/collapse">
                    <h5 className="justify-content-between d-flex align-items-center">Accordion<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/pro/charts">
                    <h5 className="justify-content-between d-flex align-items-center">Charts<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/pro/datepicker">
                    <h5 className="justify-content-between d-flex align-items-center">Date picker<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/pro/lightbox">
                    <h5 className="justify-content-between d-flex align-items-center">Lightbox<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>

                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/pro/multicarousel">
                    <h5 className="justify-content-between d-flex align-items-center">Multi-item Carousel<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/pro/scrollbar">
                    <h5 className="justify-content-between d-flex align-items-center">ScrollBar<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/pro/sticky">
                    <h5 className="justify-content-between d-flex align-items-center">Sticky Content<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/pro/thumbnailscarousel">
                    <h5 className="justify-content-between d-flex align-items-center">Thumbnails Carousel<Fa icon="angle-right" /></h5>
                  </NavLink>
                </NavItem>
                <NavItem tag="li" className="list-group-item list-group-item-action">
                  <NavLink to="/advanced/pro/timepicker">
                    <h5 className="justify-content-between d-flex align-items-center">Time picker<Fa icon="angle-right" /></h5>
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

export default AdvancedPage;
