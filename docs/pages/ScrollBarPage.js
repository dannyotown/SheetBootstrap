import React from 'react';
import { Container, PerfectScrollbar } from 'mdbreact';


class ScrollBarPage extends React.Component  {

  render() {
    const outerContainerStyle = {width: '600px', height: '400px'}
    const style = { backgroundImage: "url('https://i.imgur.com/nAUUNzH.jpg')",
    width: "1280px", height: "720px", position: 'relative'}
    return(
      <Container style={outerContainerStyle} className="mt-5">
        <PerfectScrollbar option={{wheelSpeed:1}} className="scrollbar-primary">
          <Container style={style} className="scrollbar-primary"></Container>
        </PerfectScrollbar>
      </Container>
    );
  }
};

export default ScrollBarPage;
