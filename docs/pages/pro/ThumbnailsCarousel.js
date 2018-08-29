import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, Container, Fa, Row } from 'mdbreact';

class ThumbnailsCarouselPage extends Component {

  render(){
    return(
      <Container>
        <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Thumbnails Carousel</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/advanced/carousel/#thumbnails"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
        </Row>
        <hr className="mb-5" />
        <Carousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          thumbnails
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide" />
            </CarouselItem>
            <CarouselItem itemId="2">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide" />
            </CarouselItem>
            <CarouselItem itemId="3">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default ThumbnailsCarouselPage;
