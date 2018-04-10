import React from 'react';
import { Container, Row, Col,Button, Card, CardBody, CardImage, CardTitle, CardText, TabPane, TabContent, Nav, NavItem, NavLink } from 'mdbreact';
import classnames from 'classnames';


class TabsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: '1',
      activeItem2: '1',
      activeItem3: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }
  toggle2(tab) {
    if (this.state.activeItem2 !== tab) {
      this.setState({
        activeItem2: tab
      });
    }
  }
  toggle2(tab) {
    if (this.state.activeItem3 !== tab) {
      this.setState({
        activeItem3: tab
      });
    }
  }
  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col md="12">
            <Nav tabs className="nav-justified">
              <NavItem>
                <NavLink to="#"
                  className={classnames({ active: this.state.activeItem === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                        Tab 1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"
                  className={classnames({ active: this.state.activeItem === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                        Tab 2
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="card" activeItem={this.state.activeItem}>
              <TabPane tabId="1">
                <Row>
                  <Col md="12">
                  <CardBody>
                    <CardTitle>Traditional, panel-like navigation</CardTitle>
                    <Button>Go somewhere</Button>
                    </CardBody>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col md="6">
                    <CardBody>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </CardBody>
                  </Col>
                  <Col md="6">
                    <CardBody>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </CardBody>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>

            <Nav classicTabs color="blue" className="nav-justified mt-5">
              <NavItem>
                <NavLink to="#"
                  className={classnames({ active: this.state.activeItem2 === '1' })}
                  onClick={() => { this.toggle2('1'); }}
                >
                        Tab 1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"
                  className={classnames({ active: this.state.activeItem2 === '2' })}
                  onClick={() => { this.toggle2('2'); }}
                >
                        Tab 2
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="card" activeItem={this.state.activeItem2}>
              <TabPane tabId="1">
                <Row>
                  <Col md="12">
                    <CardBody>
                      <CardTitle>These are some classic tabs</CardTitle>
                      <CardText>Here comes a Material Design classic!</CardText>
                      <Button color="blue">Go somewhere</Button>
                    </CardBody>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col md="6">
                    <CardBody>
                      <CardTitle>Material</CardTitle>
                      <CardText>Just for You</CardText>
                      <Button color="blue">Go somewhere</Button>
                    </CardBody>
                  </Col>
                  <Col md="6">
                    <CardBody>
                      <CardTitle>Design</CardTitle>
                      <CardText>Tab the contents of your heart.</CardText>
                      <Button color="blue">Go somewhere</Button>
                    </CardBody>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>

            <Nav pills className="nav-justified pills-secondary mt-5">
              <NavItem>
                <NavLink to="#"
                  className={classnames({ active: this.state.activeItem3 === '1' })}
                  onClick={() => { this.toggle2('1'); }}
                >
                        A
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"
                  className={classnames({ active: this.state.activeItem3 === '2' })}
                  onClick={() => { this.toggle2('2'); }}
                >
                        B
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeItem={this.state.activeItem3}>
              <TabPane tabId="1">
                <Row>
                  <Col md="12">
                    <CardBody>
                      <CardTitle>Take the pills</CardTitle>
                      <CardText>Open your mind!</CardText>
                      <Button color="secondary">Yeah</Button>
                    </CardBody>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col md="6">
                    <CardBody>
                      <CardTitle>Material</CardTitle>
                      <CardText>Why</CardText>
                      <Button color="secondary">here</Button>
                    </CardBody>
                  </Col>
                  <Col md="6">
                    <CardBody>
                      <CardTitle>Design</CardTitle>
                      <CardText>Not</CardText>
                      <Button color="secondary">there</Button>
                    </CardBody>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TabsPage;
