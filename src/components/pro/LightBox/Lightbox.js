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
      diffY: 0,
      direction: null,
      drag: false,
      dragAnimation: true,
      dragPercent: 0,
      dragPos: null,
      duration: 400,
      fullscreen: false,
      image: null,
      lastPosition: null,
      objectFit: true,
      padding: '0',
      showImage: false,
      sliderPos: null,
      transform: 'translate(0%, 0%)',
      transformSliders: null,
      zoomedImage: 'translate(0%,0%)'
    };

    this.activeDivRef = React.createRef();
    this.slideRefs = [];
  }
  loadImage = e => {
    let data = e.target;
    this.setState({
      image: e.target,
      activePosition: data.getBoundingClientRect()
    });
  };

  activeSet = (e, id) => {
    let data = e.target;
    let render = this.state.activeID;
    this.setState(
      {
        activeID: id + 1,
        // activePosition: data.getBoundingClientRect(),
        // image: e.target,
        lastPosition: data
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
              background: 'black',
              padding: '50px 0'
            });
          }, 1);
      }
    );
  };

  dragStart = e => {
    if (
      e.target.tagName === 'IMG' &&
      e.button === 0 &&
      !e.nativeEvent.sourceCapabilities.firesTouchEvents &&
      !this.state.drag &&
      this.state.dragPercent === 0
    ) {
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

  dragMoveSlide = e => {
    if (this.state.drag) {
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
          dragPercent: Math.abs((diffX / window.innerWidth) * 100)
        });
      } else if (this.state.direction === 'y') {
        this.setState({
          sliderPos: `${diffY}px`,
          transformSliders: `translate3d(0, ${diffY}px, 0)`,
          dragPercent: Math.abs((diffY / window.innerHeight) * 100)
        });
      }
    }
  };

  dragStopSlide = e => {
    if (
      this.state.drag &&
      e.button === 0 &&
      !e.nativeEvent.sourceCapabilities.firesTouchEvents
    ) {
      const {
        activeID,
        direction,
        dragPercent,
        duration,
        padding,
        sliderPos
      } = this.state;
      if (dragPercent >= 20) {
        this.setState({ drag: false });
        if (direction === 'x') {
          let pos =
            parseInt(sliderPos) > 0
              ? window.innerWidth + parseInt(padding.split(' ')[0])
              : -window.innerWidth - parseInt(padding.split(' ')[0]);

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
                    dragAnimation: false,
                    image: pos < 0 ? next : prev
                  },
                  () => {
                    setTimeout(() => {
                      pos < 0 ? this.nextSlide() : this.prevSlide();
                      this.setState({ dragAnimation: true });
                    }, duration + 100);
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
            direction: null,
            drag: false,
            dragPercent: 0,
            transformSliders: null
          });
        }, duration * 2 - 10);
      } else {
        let dragPos = {
          x: e.clientX,
          y: e.clientY
        };

        if (
          dragPos.x === this.state.dragPos.x &&
          dragPos.y === this.state.dragPos.y
        ) {
          this.toggleZoom();
        }

        this.setState({
          direction: null,
          drag: false,
          dragPercent: 0,
          transformSliders: null
        });
      }
    } else if (!!this.state.direction) {
      setTimeout(() => {
        this.setState({
          direction: null
        });
      }, this.state.duration);
    }
  };

  dragMoveZoomed = e => {
    if (this.state.drag) {
      let dragPos = {
        x: e.clientX,
        y: e.clientY
      };

      let diffX = dragPos.x - this.state.dragPos.x;
      let diffY = dragPos.y - this.state.dragPos.y + this.state.diffY;

      this.setState({
        transformSliders: `translate3d(${diffX}px, ${diffY}px, 0)`,
        dragPercent: Math.abs((diffY / window.innerWidth) * 100)
      });
    }
  };

  dragStopZoomed = e => {
    if (this.state.drag && this.state.transformSliders) {
      let diff = Number(
        this.state.transformSliders
          .match(/\-*[0-9]*\.?[0-9]+px/g)[1]
          .replace('px', '')
      );

      if (this.state.dragPercent >= 15) {
        let percent = 1.45;
        diff = diff * percent - diff;
      }
      this.setState({
        direction: null,
        dragPercent: 0,
        diffY: diff,
        transformSliders: `translate3d(0px, ${diff}px, 0px)`
      });
    } else {
      if (
        this.state.dragPercent === 0 &&
        !e.nativeEvent.sourceCapabilities.firesTouchEvents
      ) {
        this.setState({
          objectFit: true
        });
      }
    }

    this.setState({
      drag: false
    });
  };

  touchStart = e => {
    if (this.state.objectFit) {
      let size = e.target.getBoundingClientRect();
      let dragPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY - size.y
      };

      let percent = {
        x: (dragPos.x / size.width) * 100,
        y: (dragPos.y / size.height) * 100
      };

      this.setState({
        objectFit: false,
        zoomedImage: `translate(${-percent.x + 50}%,${-percent.y + 50}%)`
      });
    } else {
      this.setState({
        objectFit: true,
        zoomedImage: 'translate(0%,0%)'
      });
    }
  };

  close = () => {
    this.setState(
      {
        activePosition: this.state.lastPosition.getBoundingClientRect(),
        background: '',
        diffY: 0,
        zoomedImage: 'translate(0%,0%)',
        objectFit: true,
        padding: '0',
        transformSliders: null
      },
      () => {
        setTimeout(() => {
          this.setState({ activeID: null });
        }, this.state.duration);
      }
    );
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  closeDiv = e => e.target === this.activeDivRef.current && this.close();

  toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    this.setState({ fullscreen: !this.state.fullscreen });
  };

  toggleZoom = () => {
    if (!this.state.objectFit) {
      this.setState({
        zoomedImage: 'translate(0%,0%)'
      });
    }

    this.state.dragPercent === 0 &&
      this.setState({ objectFit: !this.state.objectFit });
  };

  nextSlide = () => {
    let next = this.slideRefs[this.state.activeID] || this.slideRefs[0];
    let index = this.slideRefs[this.state.activeID]
      ? this.state.activeID + 1
      : 1;
    this.setState({
      activeID: index,
      image: next,
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
      image: prev,
      lastPosition: prev
    });
  };

  render() {
    const { images, noMargins, lg, md, sm, size, xl, xs } = this.props;
    const {
      activeID,
      activePosition,
      background,
      direction,
      drag,
      dragAnimation,
      duration,
      fullscreen,
      image,
      objectFit,
      padding,
      transform,
      transformSliders,
      zoomedImage
    } = this.state;

    const { innerWidth, innerHeight } = window;
    const lightboxClassNames = classNames(
      'mdb-lightbox d-flex flex-wrap',
      !noMargins && 'no-margin'
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
      zIndex: activeID ? '99999' : '-999',
      transition: '0.2s',
      userSelect: 'none'
    };
    const sliderStyles = {
      transform: direction === 'x' && transformSliders,
      transition: !drag && dragAnimation && `${duration / 1.5}ms`
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
      objectFit: 'contain',
      position: 'fixed',
      height: activePosition && activePosition.height,
      width: activePosition && activePosition.width,
      top: activePosition && activePosition.y,
      left: 'calc(-100% - 65px)',
      padding
    };
    const nextImgStyles = {
      ...prevImgStyles,
      left: 'calc(+100% + 65px)'
    };
    const activeDivStyles = {
      ...prevImgStyles,
      left: activePosition && activePosition.x,
      transition: !drag && `${duration}ms`,
      transform: !objectFit || direction === 'y' ? transformSliders : transform,
      padding: '0',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const activeImgStyles = {
      width: background
        ? objectFit
          ? innerWidth > innerHeight
            ? 'calc(78% + 2px)'
            : '100%'
          : innerWidth > innerHeight
          ? '90%'
          : '300%'
        : '100%',
      cursor: objectFit ? 'zoom-in' : 'grab',
      transition: activeID && `${duration}ms`,
      position: 'relative',
      transform: zoomedImage,
      zIndex: activeID ? '99999' : '-999',
      display: activeID ? '' : 'none'
    };

    let prevImg;
    let nextImg;

    if (this.slideRefs.length) {
      prevImg = this.slideRefs[this.state.activeID - 2]
        ? this.slideRefs[this.state.activeID - 2]
        : this.slideRefs[this.slideRefs.length - 1];
      nextImg = this.slideRefs[this.state.activeID]
        ? this.slideRefs[this.state.activeID]
        : this.slideRefs[0];
    }

    const items = images.map((image, id) => (
      <MDBCol
        tag='figure'
        lg={lg || image.lg}
        md={md || image.md}
        sm={sm || image.sm}
        size={size || image.size}
        xl={xl || image.xl}
        xs={xs || image.xs}
        className='figure'
        key={id}
      >
        <img
          src={image.src}
          className='figure-img img-fluid z-depth-1 m-0'
          onClick={e => this.activeSet(e, id)}
          onMouseEnter={this.loadImage}
          alt={image.alt || `image ${id + 1}`}
          ref={img => (this.slideRefs[id] = img)}
          style={{ userSelect: 'none' }}
        />
        {image.head && (
          <p className='text-uppercase font-weight-bold mt-4'>{image.head}</p>
        )}
      </MDBCol>
    ));
    return (
      <MDBContainer>
        <div
          id='mdb-lightbox-ui'
          className={lightboxUiClassNames}
          style={containerStyles}
          draggable='false'
          onMouseLeave={
            objectFit && drag ? this.dragStopSlide : this.dragStopZoomed
          }
          onMouseUp={objectFit ? this.dragStopSlide : this.dragStopZoomed}
        >
          {image && (
            <>
              <div
                className='d-flex position-absolute w-100'
                style={sliderStyles}
                draggable='false'
              >
                {background && objectFit && (
                  <img
                    alt={prevImg.alt}
                    src={prevImg.src}
                    style={prevImgStyles}
                    draggable='false'
                  />
                )}
                <div
                  style={activeDivStyles}
                  ref={this.activeDivRef}
                  onClick={this.closeDiv}
                >
                  <img
                    alt={image.alt}
                    style={activeImgStyles}
                    src={image.src}
                    draggable='false'
                    onTouchStart={this.touchStart}
                    onMouseDown={
                      !drag && dragAnimation && !direction
                        ? this.dragStart
                        : () => {}
                    }
                    onMouseMove={
                      objectFit ? this.dragMoveSlide : this.dragMoveZoomed
                    }
                    onWheel={objectFit ? this.close : () => {}}
                  />
                </div>
                {background && objectFit && (
                  <img
                    alt={nextImg.alt}
                    src={nextImg.src}
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
  noMargins: PropTypes.bool,
  lg: PropTypes.string,
  md: PropTypes.string,
  sm: PropTypes.string,
  size: PropTypes.string,
  xl: PropTypes.string,
  xs: PropTypes.string
};

LightBox.defaultProps = {
  noMargins: false
};

export default LightBox;
