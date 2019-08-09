import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDBContainer } from '../../Container';
import { MDBCol } from '../../Col';
import { MDBBtnGroup } from '../../ButtonGroup';
import { MDBBtn } from '../../Button';

class LightBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: null,
      activePosition: null,
      background: '',
      drag: false,
      dragAnimation: true,
      dragPercent: 0,
      dragPos: null,
      duration: 400,
      direction: null,
      fullscreen: false,
      image: null,
      lastPosition: null,
      objectFit: true,
      padding: '0',
      sliderPos: null,
      transform: 'translate(0%, 0%)',
      transformSliders: null,
      showImage: false
    };

    this.slideRefs = [];
  }

  activeSet = (e, id) => {
    let data = e.target;
    let render = this.state.activeID;
    this.setState(
      {
        activePosition: data.getBoundingClientRect(),
        image: e.target.src,
        lastPosition: data,
        activeID: id + 1
      },
      () => {
        !render &&
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

  dragStart = e => {
    if (e.target.tagName !== 'BUTTON' && !this.state.drag) {
      let dragPos = {
        x: e.clientX,
        y: e.clientY
      };
      this.setState({
        drag: true,
        dragPos: dragPos
      });
    }
  };

  dragMove = e => {
    this.setState({ drag: true });
    let dragPos = {
      x: e.clientX,
      y: e.clientY
    };

    let diffX = dragPos.x - this.state.dragPos.x;
    let diffY = dragPos.y - this.state.dragPos.y;

    if (this.state.direction === null) {
      setTimeout(() => {
        if (Math.abs(diffX) > Math.abs(diffY)) {
          this.setState({ direction: 'x' });
        } else {
          this.setState({ direction: 'y' });
        }
      }, 25);
    }

    if (this.state.direction === 'x') {
      this.setState({
        sliderPos: `${diffX}px`,
        transformSliders: `translate3d(${diffX}px, 0, 0)`,
        dragPercent: Math.abs((diffX / document.body.clientWidth) * 100)
      });
    } else if (this.state.direction === 'y') {
      this.setState({
        sliderPos: `${diffY}px`,
        transformSliders: `translate3d(0, ${diffY}px, 0)`,
        dragPercent: Math.abs((diffY / document.body.clientHeight) * 100)
      });
    }
  };

  dragStop = () => {
    const {
      drag,
      dragPercent,
      direction,
      duration,
      sliderPos,
      padding,
      activeID
    } = this.state;
    if (dragPercent >= 20) {
      this.setState({ drag: false });
      if (direction === 'x') {
        let pos =
          parseInt(sliderPos) > 0
            ? document.body.clientWidth + parseInt(padding.split(' ')[0])
            : -document.body.clientWidth - parseInt(padding.split(' ')[0]);

        this.setState(
          { transformSliders: `translate3d(${pos}px, 0, 0)` },
          () => {
            setTimeout(() => {
              let next = this.slideRefs[activeID]
                ? this.slideRefs[activeID]
                : this.slideRefs[0];
              let prev =
                this.slideRefs[activeID - 2] ||
                this.slideRefs[this.slideRefs.length - 1];

              this.setState(
                {
                  image: pos < 0 ? next.src : prev.src,
                  dragAnimation: false
                },
                () => {
                  setTimeout(() => {
                    pos < 0 ? this.nextSlide() : this.prevSlide();
                    this.setState({ dragAnimation: true });
                  }, duration);
                }
              );
            }, duration - 1);
          }
        );
      } else {
        this.setState({ transformSliders: null });
        this.close();
      }
      setTimeout(() => {
        this.setState({
          drag: false,
          direction: null,
          transformSliders: null,
          dragPercent: 0
        });
      }, duration * 2 - 10);
    } else {
      this.setState({
        drag: false,
        direction: null,
        transformSliders: null,
        dragPercent: 0
      });
    }
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
    this.setState({ fullscreen: !this.state.fullscreen });
  };

  toggleZoom = () => this.setState({ objectFit: !this.state.objectFit });

  nextSlide = () => {
    let next = this.slideRefs[this.state.activeID]
      ? this.slideRefs[this.state.activeID]
      : this.slideRefs[0];
    let index = this.slideRefs[this.state.activeID]
      ? this.state.activeID + 1
      : 1;

    this.setState({
      activeID: index,
      image: next.src,
      lastPosition: next
    });
  };

  prevSlide = () => {
    let prev =
      this.slideRefs[this.state.activeID - 2] ||
      this.slideRefs[this.slideRefs.length - 1];
    let index =
      this.slideRefs[this.state.activeID - 1] && this.state.activeID - 1 !== 0
        ? this.state.activeID - 1
        : this.slideRefs.length;

    this.setState({
      activeID: index,
      image: prev.src,
      lastPosition: prev
    });
  };

  render() {
    const { images, noMargin } = this.props;
    const {
      activePosition,
      activeID,
      background,
      duration,
      direction,
      drag,
      dragAnimation,
      fullscreen,
      image,
      transform,
      padding,
      objectFit,
      transformSliders
    } = this.state;

    const lightboxClassNames = classNames(
      'mdb-lightbox d-flex flex-wrap',
      noMargin && 'no-margin'
    );
    const lightboxUiClassNames = classNames(
      background,
      !objectFit && 'pswp--zoomed-in',
      fullscreen && 'pswp--fs'
    );
    const pswpsButton = classNames(
      'pswp__button d-block z-depth-0 pswp__button--'
    );

    const containerStyles = {
      height: '100%',
      width: '100%',
      position: 'fixed',
      left: '0',
      top: '0',
      zIndex: activePosition ? '99999' : '-999',
      transition: '0.2s',
      userSelect: 'none'
    };
    const sliderStyles = {
      transform: direction === 'x' && transformSliders,
      transition: !drag && dragAnimation && `${duration}ms`
    };
    const arrowsDivStyles = {
      transition: `${duration}ms`,
      top: '55%',
      transform: 'translateY(-50%)',
      zIndex: '1',
      position: 'absolute'
    };
    const arrowStyles = {
      width: '0px',
      height: '0px',
      marginTop: '-100px'
    };
    const prevImgStyles = {
      objectFit: objectFit ? 'contain' : 'cover',
      position: 'fixed',
      height: activePosition && activePosition.height,
      width: activePosition && activePosition.width,
      left: 'calc(-100% - 50px)',
      top: activePosition && activePosition.y,
      padding
    };
    const nextImgStyles = {
      ...prevImgStyles,
      left: 'calc(+100% + 50px)'
    };
    const activeImgStyles = {
      ...prevImgStyles,
      left: activePosition && activePosition.x,
      transition: !drag && `${duration}ms`,
      transform: direction === 'y' ? transformSliders : transform,
      padding: objectFit ? padding : '0',
      cursor: objectFit ? 'zoom-in' : 'grab'
    };

    let prevImgSrc;
    let nextImgSrc;

    if (this.slideRefs.length) {
      prevImgSrc = this.slideRefs[this.state.activeID - 2]
        ? this.slideRefs[this.state.activeID - 2].src
        : this.slideRefs[this.slideRefs.length - 1].src;
      nextImgSrc = this.slideRefs[this.state.activeID]
        ? this.slideRefs[this.state.activeID].src
        : this.slideRefs[0].src;
    }

    const items = images.map((image, id) => (
      <MDBCol tag='figure' md='4' className='figure' key={id}>
        <img
          src={image}
          className='figure-img img-fluid z-depth-1 m-0'
          onClick={e => this.activeSet(e, id)}
          alt=''
          ref={img => (this.slideRefs[id] = img)}
          style={{ userSelect: 'none' }}
        />
      </MDBCol>
    ));
    return (
      <MDBContainer>
        <div
          id='mdb-lightbox-ui'
          className={lightboxUiClassNames}
          style={containerStyles}
          draggable='false'
        >
          {activePosition && (
            <>
              <div
                className='d-flex position-absolute w-100'
                style={sliderStyles}
                draggable='false'
              >
                {background && (
                  <img
                    alt='1'
                    src={prevImgSrc}
                    style={prevImgStyles}
                    draggable='false'
                  />
                )}
                <img
                  alt='2'
                  src={image}
                  style={activeImgStyles}
                  draggable='false'
                  onMouseDown={e =>
                    !drag &&
                    objectFit &&
                    dragAnimation &&
                    !direction &&
                    this.dragStart(e)
                  }
                  onMouseMove={e =>
                    objectFit && drag ? this.dragMove(e) : false
                  }
                  onMouseUp={() =>
                    objectFit ? this.dragStop() : this.toggleZoom()
                  }
                  onMouseLeave={() =>
                    objectFit && drag ? this.dragStop() : false
                  }
                  onWheel={this.close}
                />
                {background && (
                  <img
                    alt='3'
                    src={nextImgSrc}
                    style={nextImgStyles}
                    draggable='false'
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
                      className={pswpsButton + `zoom`}
                      color='transparent'
                      onClick={this.toggleZoom}
                    />
                    <MDBBtn
                      className={pswpsButton + `fs`}
                      color='transparent'
                      onClick={this.toggleFullscreen}
                    />
                    <MDBBtn
                      className={pswpsButton + `close`}
                      color='transparent'
                      onClick={this.close}
                    />
                  </MDBBtnGroup>
                  <div
                    className='d-flex justify-content-between w-100'
                    style={arrowsDivStyles}
                  >
                    <div
                      className={pswpsButton + 'arrow--left'}
                      style={arrowStyles}
                      onClick={this.prevSlide}
                    />
                    <div
                      className={pswpsButton + 'arrow--right'}
                      style={arrowStyles}
                      onClick={this.nextSlide}
                    />
                  </div>
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
