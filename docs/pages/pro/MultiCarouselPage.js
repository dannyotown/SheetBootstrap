import React, { Component } from 'react';

import { Carousel, CarouselCaption, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, View, Mask, Container, Col, Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';

class CarouselPage extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 3
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render(){

    const { activeItem } = this.state;

    return(
      <Container>
        <h4 className="mt-5 mb-2">Multi-item Carousel</h4>
        <Carousel 
          multiItem
          activeItem={this.state.activeItem}
          next={this.next}>
          <div className="controls-top">
            <CarouselControl className="btn-floating" direction="prev" role="button" onClick={() => { this.prev(); }} />
            <CarouselControl className="btn-floating" direction="next" role="button" onClick={() => { this.next(); }} />
          </div>
          <CarouselIndicators>
            <CarouselIndicator active={activeItem == 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem == 2 ? true : false} onClick={() => { this.goToIndex(2); }}>></CarouselIndicator>
            <CarouselIndicator active={activeItem == 3 ? true : false} onClick={() => { this.goToIndex(3); }}>></CarouselIndicator>
          </CarouselIndicators>
          <CarouselInner>
            <CarouselItem itemId="1">
              <Col md="4">
                <Card className="mb-2">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a className="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a className="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a className="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
            </CarouselItem>
            <CarouselItem itemId="2">
              <Col md="4">
                <Card className="mb-2">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a className="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a className="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a className="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
            </CarouselItem>
            <CarouselItem itemId="3">
              <Col md="4">
                <Card className="mb-2">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a className="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a className="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a className="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;