import React from 'react';
import { Mask, View, Container, Row, Col } from 'mdbreact';


class MasksPage extends React.Component {

  render () {
    return (
      <Container>
        <Row>
          <Col md="4">
            <View>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask pattern="1" className="flex-center">
                <p className="white-text">pattern = "1"</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask pattern="2" className="flex-center">
                <p className="white-text">pattern = "2"</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask pattern="3" className="flex-center">
                <p className="white-text">pattern = "3"</p>
              </Mask>
            </View>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="4">
            <View overlay="blue-light">
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask className="flex-center">
                <p className="white-text">overlay = "blue-light"</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View overlay="blue-strong">
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask className="flex-center">
                <p className="white-text">overlay = "blue-strong"</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View overlay="blue-slight">
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask className="flex-center">
                <p className="white-text">overlay = "blue-slight"</p>
              </Mask>
            </View>
          </Col>
        </Row>
        <div style={{height: '100vh'}} />
      </Container>
    );
  }
}

export default MasksPage;
