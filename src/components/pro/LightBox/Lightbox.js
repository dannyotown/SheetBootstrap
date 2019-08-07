import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDBContainer } from '../../Container';
import { MDBCol } from '../../Col';
import { MDBBtnGroup } from '../../ButtonGroup';
import { MDBBtn } from '../../Button';
import { MDBIcon } from '../../Fa';

class LightBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: null,
      activePosition: null,
      background: '',
      image: null,
      lastPosition: null,
      objectFit: true,
      transform: 'translate(0%, 0%)',
      padding: '0',
      duration: 400
    };

    this.SlideRefs = [];
  }

  setActive = (e, key) => {
    console.log(this.SlideRefs);
    let data = e.target;
    console.log(data.getBoundingClientRect());
    this.setState(
      {
        activePosition: data.getBoundingClientRect(),
        image: e.target.src,
        lastPosition: data,
        activeID: key + 1
      },
      () => {
        setTimeout(() => {
          this.setState({
            activePosition: {
              height: '100vh',
              width: '100vw',
              x: '0%',
              y: '0%'
            },
            padding: '50px 0',
            background: 'black'
          });
        }, 1);
      }
    );
  };

  close = () => {
    this.setState(
      {
        activePosition: this.state.lastPosition.getBoundingClientRect(),
        background: '',
        padding: '0',
        objectFit: true
      },
      () => {
        setTimeout(() => {
          this.setState({ activePosition: null, activeID: null });
        }, this.state.duration);
      }
    );
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
  toggleZoom = () => {
    this.setState({ objectFit: !this.state.objectFit });
  };

  render() {
    const { images, noMargin } = this.props;
    const {
      activePosition,
      activeID,
      background,
      duration,
      image,
      transform,
      padding,
      objectFit
    } = this.state;

    const lightboxClassNames = classNames(
      'mdb-lightbox d-flex flex-wrap',
      noMargin && 'no-margin'
    );

    const items = images.map((image, id) => (
      <MDBCol tag='figure' md='4' className='figure' key={id}>
        <img
          src={image}
          className='figure-img img-fluid z-depth-1 m-0'
          onClick={e => this.setActive(e, id)}
          alt=''
          ref={img => (this.SlideRefs[id] = img)}
        />
      </MDBCol>
    ));
    

    return (
      <MDBContainer>
        <div
          id='mdb-lightbox-ui'
          className={`${background} ${!objectFit && 'pswp--zoomed-in'}`}
          style={{
            height: '100%',
            width: '100%',
            position: 'fixed',
            left: '0',
            top: '0',
            zIndex: activePosition && '99999',
            transition: '0.2s'
          }}
        >
          {activePosition && (
            <>
              <div
                className='d-flex'
                onTouchStart={this.startTouch}
                onTouchMove={this.state.swipe && this.moveTouch}
                // onTouchEnd={() => this.setState({ swipeAvailable: true })}
              >
                {background && (
                  <img
                    src={
                      this.SlideRefs[this.state.activeID - 2]
                        ? this.SlideRefs[this.state.activeID - 2].src
                        : this.SlideRefs[this.SlideRefs.length - 1].src
                    }
                    style={{
                      objectFit: objectFit ? 'contain' : 'cover',
                      position: 'fixed',
                      height: activePosition.height,
                      width: activePosition.width,
                      left: '-110%',
                      top: activePosition.y
                    }}
                  />
                )}
                <img
                  src={image}
                  style={{
                    objectFit: objectFit ? 'contain' : 'cover',
                    position: 'fixed',
                    height: activePosition.height,
                    width: activePosition.width,
                    left: activePosition.x,
                    top: activePosition.y,
                    transition: `${duration}ms`,
                    transform: transform,
                    padding: objectFit ? padding : '0',
                    cursor: objectFit ? 'zoom-in' : 'grab'
                  }}
                  draggable='false'
                  onClick={this.toggleZoom}
                />
                {background && (
                  <img
                    src={
                      this.SlideRefs[this.state.activeID]
                        ? this.SlideRefs[this.state.activeID].src
                        : this.SlideRefs[0].src
                    }
                    style={{
                      objectFit: objectFit ? 'contain' : 'cover',
                      position: 'fixed',
                      height: activePosition.height,
                      width: activePosition.width,
                      left: '110%',
                      top: activePosition.y
                    }}
                  />
                )}
              </div>

              {background && (
                <>
                  <p className='float-left text-white-50 mt-3 ml-3'>
                    {activeID}/{images.length}
                  </p>
                  <MDBBtnGroup
                    className='float-right'
                    style={{ transition: `${duration}ms` }}
                  >
                    <MDBBtn
                      className='pswp__button pswp__button--zoom d-block z-depth-0'
                      color='transparent'
                      onClick={this.toggleZoom}
                    />
                    <MDBBtn
                      className='pswp__button pswp__button--fs d-block z-depth-0'
                      color='transparent'
                      onClick={this.toggleFullscreen}
                    />
                    <MDBBtn
                      className='pswp__button pswp__button--close z-depth-0'
                      color='transparent'
                      onClick={this.close}
                    />
                  </MDBBtnGroup>
                  <MDBBtnGroup
                    className='d-flex justify-content-between w-100'
                    style={{
                      transition: `${duration}ms`,
                      top: '50%',
                      zIndex: '1'
                    }}
                  >
                    <MDBBtn
                      className=' d-block z-depth-0'
                      color='transparent'
                      onClick={this.toggleZoom}
                    />
                    <MDBBtn
                      className='d-block z-depth-0'
                      color='transparent'
                      onClick={this.toggleFullscreen}
                    />
                  </MDBBtnGroup>
                </>
              )}
            </>
          )}
        </div>
        <div className={lightboxClassNames}>{items}</div>
      </MDBContainer>
    );
  }
}

LightBox.propTypes = {
  images: PropTypes.array,
  noMargin: PropTypes.bool
};

LightBox.defaultProps = {
  noMargin: false
};

export default LightBox;
