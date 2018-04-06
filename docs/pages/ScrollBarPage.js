import React, { Component } from 'react';
import { ScrollBar } from 'mdbreact';


class ScrollBarPage extends Component {


  render(){
    return (
      <div className="example">
      <ScrollBar
          onScrollY={() => console.log('onScrollY')}
          onScrollX={() => logEvent('onScrollX')}
          onScrollUp={() => logEvent('onScrollUp')}
          onScrollDown={() => logEvent('onScrollDown')}
          onScrollLeft={() => logEvent('onScrollLeft')}
          onScrollRight={() => logEvent('onScrollRight')}
          onYReachStart={() => logEvent('onYReachStart')}
          onYReachEnd={() => logEvent('onYReachEnd')}
          onXReachStart={() => logEvent('onXReachStart')}
          onXReachEnd={() => logEvent('onXReachEnd')}
      >
          <div style={{height: '1000px'}} />
      </ScrollBar>
  </div>

    );
  }
}


export default ScrollBarPage;

