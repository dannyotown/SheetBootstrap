import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardUp,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Avatar,
  FlippingCard,
  Fa,
  Button
} from "mdbreact";
import DocsLink from "../DocsLink";

class FlippingCardPage extends Component {

  state = {
    flipped1: false,
    flipped2: false
  }

  handleFlipping = id => {
    const cardId = `flipped${id}`;
    this.setState({ [cardId]: !this.state[cardId] });
  }

  render() {
    return (
      <Container>
        <DocsLink
          title="Flipping card"
          href="https://mdbootstrap.com/plugins/react/flipping-cards/"
        />
        <Container>
          <Row between>
            <Col style={{ minHeight: '26rem', maxWidth: "22rem" }}>
              <FlippingCard
                flipped={this.state.flipped1}
                className="text-center h-100 w-100"
              >
                <Card className="face front" >
                  <CardUp>
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
                      alt=""
                    />
                  </CardUp>
                  <Avatar className="mx-auto white" circle>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      alt=""
                      className="rounded-circle"
                    />
                  </Avatar>
                  <CardBody>
                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                    <p className="font-weight-bold blue-text">Web developer</p>
                    <a
                      href="#!"
                      className="rotate-btn text-dark"
                      data-card="card-1"
                      onClick={() => this.handleFlipping(1)}
                    >
                      <Fa icon="repeat" /> Click here to rotate
                    </a>
                  </CardBody>
                </Card>
                <Card className="face back" style={{ height: "400px" }}>
                  <CardBody>
                    <h4 className="font-weight-bold">About me</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                      dolores nihil quae in mollitia asperiores ut rerum
                      repellendus, voluptatum eum, officia laudantium quaerat?
                    </p>
                    <hr />
                    <ul className="list-inline py-2">
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg fb-ic">
                          <Fa icon="facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg tw-ic">
                          <Fa icon="twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg gplus-ic">
                          <Fa icon="google-plus" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg li-ic">
                          <Fa icon="linkedin" />
                        </a>
                      </li>
                    </ul>
                    <a
                      href="#!"
                      className="rotate-btn text-dark"
                      data-card="card-1"
                      onClick={() => this.handleFlipping(1)}
                    >
                      <Fa icon="undo" /> Click here to rotate back
                    </a>
                  </CardBody>
                </Card>
              </FlippingCard>
            </Col>


            <Col style={{ minHeight: '26rem', maxWidth: "22rem" }}>
              <FlippingCard
                flipped={this.state.flipped2}
                className="text-center h-100 w-100"
              >
                <Card className="face back text-center" >
                  <CardBody>
                    <CardTitle className="text-ceter font-weight-bold my-4">Social shares<Fa icon="close rotate-btn text-muted" onClick={() => this.handleFlipping(2)} /></CardTitle>
                    <hr />
                    <div>
                      <Row center className="flex-wrap">
                        <Button tag="a" floating social="dribble"><Fa icon="dribbble" /></Button>
                        <Button tag="a" floating social="slack"><Fa icon="slack" /></Button>
                        <Button tag="a" floating social="ins"><Fa icon="instagram" /></Button>
                        <Button tag="a" floating social="pin"><Fa icon="pinterest" /></Button>
                        <Button tag="a" floating social="tw"><Fa icon="twitter" /></Button>
                        <Button tag="a" floating social="gplus"><Fa icon="google-plus" /></Button>
                        <Button tag="a" floating social="git"><Fa icon="github" /></Button>
                      </Row>
                      <h5 className="font-weight-bold my-4">Join our community</h5>
                    </div>
                    <hr />
                    <Row center className="flex-wrap">
                      <Button tag="a" social="fb" className="px-4"><Fa icon="facebook" /></Button>
                      <Button tag="a" social="tw" className="px-4"><Fa icon="twitter" /></Button>
                      <Button tag="a" social="li" className="px-4"><Fa icon="linkedin" /></Button>
                      <Button tag="a" social="ins" className="px-4"><Fa icon="instagram" /></Button>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="face front" >
                  <CardImage
                    top
                    src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg"
                    overlay="white-slight"
                    hover
                    waves
                    alt="Card image cap"
                  />
                  <CardBody className="text-center">
                    <CardTitle tag="h4">Card Title<Fa icon="share-alt text-dark float-right" onClick={() => this.handleFlipping(2)} /></CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
                  </CardText>
                    <a
                      href="#!"
                      className="black-text"
                    >
                      <h6 onClick={this.handleFlipping}>
                        Read more <Fa icon="angle-double-right" />
                      </h6>
                    </a>
                  </CardBody>
                </Card>
              </FlippingCard>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default FlippingCardPage;
