import React from 'react';
import {Container, Row, Col, Animation} from 'mdbreact';

class AnimationPage extends React.Component {
  constructor(props) {
    super(props)

  }

  handleEnd = () => {
    console.log("the dog has been revealed");
  }

  handleStart = () => {
    console.log("the dog is to be revealed");
  }
  render(){
    return(
      <Container className="mt-5">
        <Row center>
          <Animation
            type="bounce"
            infinite
          >
            <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"/>
          </Animation><br/>

        </Row>
        <Row center className="mt-5">
        <h4>&#8659; Scroll down &#8659;</h4>
        </Row>
        <Row className="mb-4" style={{marginTop: '100vh'}}>
          <Col md="4">
            <Animation
              reveal
              type="bounceInUp"
            >
              <img
              alt="A view on mountains."
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg" />
            </Animation>
          </Col>
          <Col md="4">
            <Animation
              reveal
              type="tada"
            >
              <img
              alt="Cottage on a lake surrounded by mountains."
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg" />
            </Animation>
          </Col>
          <Col md="4">
          <Animation
            reveal
            type="fadeInLeft"
          >
            <img
            alt="A boat floating on an ocean"
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" />
            </Animation>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md="4">
          <Animation
            reveal
            type="fadeInRight"
          >
            <img
            alt="View on mountains from mountain top."
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
            </Animation>
          </Col>
          <Col md="4">
          <Animation
            reveal
            type="fadeInRight"
          >
            <img
            alt="Rocky shore in the morning."
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg" />
            </Animation>
          </Col>
          <Col md="4">
          <Animation
            reveal
            type="fadeInUp"
          >
            <img
            alt="Rocky shore in the morning."
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
            </Animation>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default AnimationPage;
