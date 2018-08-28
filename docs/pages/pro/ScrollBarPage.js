import React from 'react';
import { Container, PerfectScrollbar, Fa, Row } from 'mdbreact';


class ScrollBarPage extends React.Component  {

  render() {
    const outerContainerStyle = {width: '800px', height: '400px'}
    return(
      <Container>
        <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>ScrollBar</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
        </Row>
        <hr className="mb-5" />
        <Container style={outerContainerStyle} className="mt-5">
          <PerfectScrollbar className="scrollbar-primary">
            <img src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg"/>
          </PerfectScrollbar>
        </Container>
      </Container>
    );
  }
};

export default ScrollBarPage;
