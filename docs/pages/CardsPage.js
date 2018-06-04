import React from 'react';
import { Button, Col, Row, Container, Card, CardBody, CardImage, CardTitle, CardText, Fa} from 'mdbreact';

const CardsPage = (props) => {
  const colStyle = { maxWidth: '22rem' };
  return(
    <Container>
      <Row className="mt-5">
        <Col style={colStyle}>
          <Card reverse>
            <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
              <Button href="#">Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col style={colStyle}>

          <Card>
            <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
            <CardBody>
            <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
            <CardTitle>Card Title</CardTitle>
            <hr />
            <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
            <a href="#!" className="black-text d-flex justify-content-end"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
            </CardBody>
          </Card>

        </Col>
        <Col style={colStyle}>

          <Card>
            <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
            <CardBody className="elegant-color white-text rounded-bottom">
            <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
            <CardTitle>Card Title</CardTitle>
            <hr className="hr-light" />
            <CardText className="white-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
            <a href="#!" className="black-text d-flex justify-content-end"><h5 className="white-text">Read more <Fa icon="angle-double-right"></Fa></h5></a>
            </CardBody>
          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default CardsPage;
