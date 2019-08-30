import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Lightbox.css';
import { MDBContainer } from '../../Container';
import { MDBCol } from '../../Col';
import { MDBBtnGroup } from '../../ButtonGroup';
import { MDBBtn } from '../../Button';

class LightBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.reset();

    this.overlay = React.createRef();
    this.slideRefs = [];
  }

  componentDidMount() {
    // window.addEventListener('click', () => {
    //   console.log(this.state);
    // });
    // window.addEventListener('resize', this.setScreenSize());
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.setScreenSize());
  }

  setScreenSize = () => {
    this.setState({
      screenSize: {
        x: window.innerWidth,
        y: window.innerHeight
      }
    });
  };

  reset = () => ({
    activeKey: null,
    dragImg: false,
    dragImgPos: {},
    dragPercent: 0,
    openedImg: null,
    openedImgData: null,
    scale: 0,
    scaleWheel: false,
    screenSize: {
      x: window.innerWidth,
      y: window.innerHeight
    },
    sliderOpened: false,
    zoomedScale: 0
  });

  updateScreenSize = () => {
    let e = d.documentElement;
    let g = d.getElementsByTagName('body')[0];
    this.setState({
      screenSize: {
        x: window.innerWidth || e.clientWidth || g.clientWidth,
        y: window.innerHeight || e.clientHeight || g.clientHeight
      }
    });
  };

  setScale = e => {
    const { screenSize } = this.state;
    const { height, width } = e.size;
    const margin = 150;
    let scale = 1;
    if (screenSize.x > screenSize.y) {
      if (e.realH > height) {
        if (height === width && screenSize.y > screenSize.x) {
          scale = (screenSize.x - margin) / width;
        } else if (height === width && screenSize.y < screenSize.x) {
          scale = (screenSize.y - margin) / height;
        } else if (height > width) {
          scale = (screenSize.y - margin) / height;
          if (scale * width > screenSize.x) {
            scale = (screenSize.x - margin) / width;
          }
        } else if (height < width) {
          scale = (screenSize.x - margin) / width;
          if (scale * height > screenSize.y) {
            scale = (screenSize.y - margin) / height;
          }
        }
      }
      return scale * (height / e.realH);
    } else {
      return scale;
    }
  };

  setData = img => {
    let { screenSize } = this.state;
    let data = {
      activeKey: this.slideRefs.indexOf(img),
      openedImg: img,
      openedImgData: {
        realW: img.naturalWidth,
        realH: img.naturalHeight,
        size: img.getBoundingClientRect()
      },
      scale:
        screenSize.x > screenSize.y
          ? img.getBoundingClientRect().width / img.naturalWidth
          : img.getBoundingClientRect().width / screenSize.x
    };
    data.zoomedScale = this.setScale(data.openedImgData);
    return data;
  };

  zoom = e => {
    let { openedImg } = this.state;
    const { transition } = this.props;
    const img = e.target;

    if (!openedImg) {
      const dataOfImage = this.setData(img);
      const { left, top } = dataOfImage.openedImgData.size;

      this.setState(dataOfImage, () => {
        img.style.cssText = `
          top: 0;
          left: 0;
          transform:  translate(${left}px, ${top}px) scale(${dataOfImage.scale});
          position: fixed;
        `;

        setTimeout(() => {
          document.body.classList.add('overflow-hidden');

          img.style.cssText = `
            transition:${transition}ms; 
            transform: 
              translate(-50%,-50%) 
              scale(${this.setScale(dataOfImage.openedImgData)}) 
          `;

          img.classList.add('zoom', 'active');
          this.overlay.current.classList.add('active');

          setTimeout(() => {
            img.style.cssText = `
              transform: 
                translate(-50%,-50%)
                scale(${this.setScale(dataOfImage.openedImgData)}) 
            `;

            this.setState({
              sliderOpened: true
            });
          }, this.props.transition);
        }, 0);
      });
    }
  };

  closeZoom = () => {
    let { openedImg, openedImgData } = this.state;
    if (openedImg) {
      this.setState({ sliderOpened: false });
      document.body.classList.remove('overflow-hidden');
      openedImg.classList.remove('active', 'zoom');
      openedImg.style.cssText = `
            transition: ${this.props.transition}ms;
            z-index: 9999;
            top: 0;
            left: 0;
            transform:  translate(${openedImgData.size.left}px, ${openedImgData.size.top}px) scale(${this.state.scale});
            position: fixed;
          `;

      this.overlay.current.classList.remove('active');
      setTimeout(() => {
        openedImg.style.cssText = ``;
        this.setState(this.reset());
      }, this.props.transition);
    }
  };

  scrollZoom = e => {
    const SCALE_RATIO = this.props.scale || 0.1;
    const SCALE_UP = 1 + SCALE_RATIO;
    const SCALE_DOWN = 1 - SCALE_RATIO;
    const WHEEL_UP = e.deltaY < 0;
    const WHEEL_DOWN = e.deltaY > 0;
    const MAX_ZOOM_RATIO = this.state.zoomedScale * 4;
    let scaleTransform = e.target.style.transform.split(' ');
    let scaleValue = Number(
      scaleTransform
        .filter(el => !el.search('scale'))[0]
        .replace('scale(', '')
        .replace(')', '')
    );

    if (WHEEL_UP)
      if (scaleValue * SCALE_UP < MAX_ZOOM_RATIO) {
        scaleValue *= SCALE_UP;
      }
    if (WHEEL_DOWN) {
      if (scaleValue * SCALE_DOWN >= this.state.zoomedScale) {
        scaleValue *= SCALE_DOWN;
      }
    }
    e.target.style.transform = `translate(-50%, -50%) scale(${scaleValue}) `;
  };

  toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  changeSlide = direction => {
    {
      /*const { activeKey, openedImg } = this.state;
    let img;
    console.log('change', direction);
    if (direction === 'next')
      img = this.slideRefs[activeKey + 1] || this.slideRefs[0];
    else
      img =
        this.slideRefs[activeKey - 1] ||
        this.slideRefs[this.slideRefs.length - 1];
    let imgLast = openedImg;
    let imgStyle = img.style;
    let imgLastStyle = imgLast.style;
    let data = this.setData(img);

    img.style = imgLastStyle;
    imgLast.style = imgStyle;
    img.style.cssText = `transform: scale(${this.setScale(
      data.openedImgData
    )}) translate(-50%,-50%)`;
    imgLast.classList.remove('zoom', 'active');
    img.classList.add('zoom', 'active');
    this.setState(data);
    setTimeout(() => {
      img.style.cssText = `${img.style.cssText}; transition: ${this.props.transition}ms`;
    }, 0);*/
    }

    const { activeKey, openedImg } = this.state;
    const { transition } = this.props;
    let { slideRefs } = this;
    let CURRENT_IMG = openedImg;
    let PREV_IMG = slideRefs[activeKey - 1] || slideRefs[slideRefs.length - 1];
    let NEXT_IMG = slideRefs[activeKey + 1] || slideRefs[0];
    let ACTUAL_KEY;

    console.log(PREV_IMG, CURRENT_IMG, NEXT_IMG);
    PREV_IMG.style.transition = CURRENT_IMG.style.transition = NEXT_IMG.style.transition = `${transition}ms`;

    if (direction === 'prev') {
      console.log('next');
      CURRENT_IMG.classList.add('next-img');
      PREV_IMG.classList.remove('prev-img');
      this.setState({ openedImg: PREV_IMG });
      ACTUAL_KEY = this.slideRefs.indexOf(PREV_IMG);
    } else {
      console.log('prev');
      CURRENT_IMG.classList.add('prev-img');
      CURRENT_IMG.classList.remove('active');
      NEXT_IMG.classList.remove('next-img');
      this.setState({ openedImg: NEXT_IMG });
      ACTUAL_KEY = this.slideRefs.indexOf(NEXT_IMG);
    }

    // setTimeout(() => {
    //   // Not work correctly yet
    //   this.setState({ activeKey: ACTUAL_KEY });
    //   PREV_IMG.style.transition = CURRENT_IMG.style.transition = NEXT_IMG.style.transition = `${0}ms`;

    //   img.classList.add('zoom', 'active');

    //   setTimeout(() => {
    //     img.style.cssText = `
    //         transform: 
    //           translate(-50%,-50%)
    //           scale(${this.setScale(dataOfImage.openedImgData)}) 
    //       `;

    //     this.setState({
    //       sliderOpened: true
    //     });
    //   }, this.props.transition);
    // }, transition);

    console.log(PREV_IMG.style, CURRENT_IMG.style, NEXT_IMG.style);
    console.log('change', direction);
  };

  dragStart = e => {
    if (!this.state.dragImg && this.state.openedImg) {
      let dragImgPos = {
        x: e.clientX,
        y: e.clientY
      };
      this.setState({
        dragImg: true,
        dragImgPos: dragImgPos
      });
    }
  };

  dragMoveSlide = e => {
    if (this.state.dragImg) {
      const { activeKey, zoomedScale } = this.state;
      const { slideRefs } = this;
      let CURRENT_IMG = e.target;
      let PREV_IMG =
        slideRefs[activeKey - 1] || slideRefs[slideRefs.length - 1];
      let NEXT_IMG = slideRefs[activeKey + 1] || slideRefs[0];

      let dragPos = {
        x: e.clientX,
        y: e.clientY
      };

      let diffX = dragPos.x - this.state.dragImgPos.x;
      let diffY = dragPos.y - this.state.dragImgPos.y;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        this.setState({ dragPercent: (diffX / window.innerWidth) * 100 });

        let styleSlide = scale => {
          let valueScale = Number(
            scale
              .split(' ')
              .filter(el => !el.search('scale'))[0]
              .replace('scale(', '')
              .replace(')', '')
          );

          console.log(valueScale);
          return `
            translate3d(${diffX}px, 0, 0)  
            translate(-50%,-50%)
            scale(${valueScale})`;
        };

        CURRENT_IMG.style.transform = styleSlide(CURRENT_IMG.style.transform);
        PREV_IMG.style.transform = styleSlide(PREV_IMG.style.transform);
        NEXT_IMG.style.transform = styleSlide(NEXT_IMG.style.transform);
        // PREV_IMG.style.transformOrigin = 'top left';
        // NEXT_IMG.style.transformOrigin = 'top right';

        // PREV_IMG.style.cssText = styleSlide;
        // NEXT_IMG.style.cssText = styleSlide;
      } else {
        // this.setState({ dragDirection: 'y' });
      }

      // if (this.state.dragDirection === 'x') {
      // } else if (this.state.dragDirection === 'y') {
      //   this.setState({ dragPercent: (diffX / window.innerWidth) * 100 });
      //   img.style.cssText = `transform: translate3d(0, ${diffY}px, 0) scale(${this.state.zoomedScale}) translate(-50%,-50%)`;
      // }
      // console.log(this.state.dragPercent);
    }
  };

  dragStop = e => {
    if (this.state.dragImg) {
      // e.target.style.cssText = `transform: scale(${this.state.zoomedScale}) translate(-50%,-50%)`;
      const { activeKey, dragPercent, dragDirection } = this.state;
      const galleryStyles = id => {
        let style = {
          transform: `
            translate(-50%, -50%) 
            scale(${this.setScale({
              realW: this.slideRefs[id].naturalWidth,
              realH: this.slideRefs[id].naturalHeight,
              size: this.slideRefs[id].getBoundingClientRect()
            })})
          `
        };
        return style;
      };

      let dragPercentScale = 20;

      if (dragDirection === 'x') {
        if (dragPercent > dragPercentScale) {
          console.log(this.slideRefs[activeKey - 1]);
          this.slideRefs[activeKey - 1].style.cssText = `
            transition: ${this.props.transition}ms;
            transform: 
              translate(-50%,-50%);
              scale(${this.state.zoomedScale}) 
            left: 50% !important;
          `;
          e.target.style.cssText = `
            transition: ${this.props.transition}ms;
            transform: 
              translate(-50%,-50%);
              scale(${this.state.zoomedScale}) 
            left: 150% !important;
          `;
          console.log('prev');
        } else if (dragPercent < -dragPercentScale) {
          this.slideRefs[activeKey + 1].style.cssText = `
            transition: ${this.props.transition}ms;
            transform: 
              translate(-50%,-50%);
              scale(${this.state.zoomedScale}) 
            left: 50% !important;
          `;
          e.target.style.cssText = `
            transition: ${this.props.transition}ms;
            transform: 
              translate(-50%,-50%);
              scale(${this.state.zoomedScale}) 
            left: -50% !important;
          `;
          console.log('next');
        }

        setTimeout(() => {
          let prev = this.slideRefs[activeKey - 1];
          let next = this.slideRefs[activeKey + 1];

          // prev.style = galleryStyles(activeKey-1);
          // next.style = galleryStyles(activeKey+1);

          // this.slideRefs[activeKey].style = galleryStyles(activeKey+1);
          if (dragPercent > dragPercentScale) {
            this.changeSlide('prev');
            prev.classList.add('zoom');
            this.state.openedImg.style.cssText = `transform: translate(-50%, -50%) scale(${this.state.scale}) `;
          } else if (dragPercent < -dragPercentScale) {
            this.changeSlide('next');
            next.classList.add('zoom');
            this.state.openedImg.style.cssText = `transform: translate(-50%, -50%) scale(${this.state.scale})`;
          }
        }, this.props.transition);
      } else if (dragDirection === 'y') {
      }

      this.setState({
        dragImg: false,
        dragDirection: null,
        dragPercent: 0
      });
    }
  };

  render() {
    const {
      images,
      noMargins,
      lg,
      md,
      sm,
      size,
      xl,
      xs,
      transition
    } = this.props;
    const {
      activeKey,
      openedImg,
      openedImgData,
      sliderOpened,
      dragImg
    } = this.state;

    const lightboxClassNames = classNames(
      'mdb-lightbox d-flex flex-wrap',
      !noMargins && 'no-margin'
    );

    const galleryClassNames = id =>
      classNames(
        `figure-img img-fluid z-depth-1 m-0`,

        sliderOpened && id === activeKey + 1 && 'zoom next-img',
        sliderOpened && id === activeKey - 1 && 'zoom prev-img',
        sliderOpened &&
          id === 0 &&
          activeKey + 1 > this.slideRefs.length - 1 &&
          'zoom next-img',
        sliderOpened &&
          id === this.slideRefs.length - 1 &&
          activeKey === 0 &&
          'zoom prev-img',
        sliderOpened && id === 1 && activeKey === 0 && 'zoom next-img'
      );

    const galleryStyles = id => {
      if (this.slideRefs[id]) {
        let next = id === activeKey + 1;
        let prev = id === activeKey - 1;
        let second = id === 0 && activeKey + 1 > this.slideRefs.length - 1;
        let last = id === this.slideRefs.length - 1 && activeKey === 0;
        let first = id === 1 && activeKey === 0;
        let style = {
          transform:
            sliderOpened &&
            (next || prev || second || last || first) &&
            `translate(-50%, -50%) scale(${this.setScale({
              realW: this.slideRefs[id].naturalWidth,
              realH: this.slideRefs[id].naturalHeight,
              size: this.slideRefs[id].getBoundingClientRect()
            })})`
        };
        // console.log(style)
        return style;
      }
    };

    const arrowsDivStyles = {
      transition: `${transition}ms`,
      top: '55%',
      transform: 'translateY(-50%)'
    };

    const arrowStyles = {
      width: '0px',
      height: '0px',
      marginTop: '-100px'
    };

    const items = images.map((image, id) => (
      <MDBCol
        tag='figure'
        lg={lg || image.lg}
        md={md || image.md}
        sm={sm || image.sm}
        xl={xl || image.xl}
        xs={xs || image.xs}
        size={size || image.size}
        className=''
        key={id}
      >
        <img
          src={image.src}
          className={galleryClassNames(id)}
          alt={image.alt || `image ${id + 1}`}
          ref={img => (this.slideRefs[id] = img)}
          onClick={this.zoom}
          draggable={!openedImg}
          onMouseDown={this.dragStart}
          onMouseMove={dragImg ? this.dragMoveSlide : () => {}}
          onMouseLeave={dragImg ? this.dragStop : () => {}}
          onMouseUp={dragImg ? this.dragStop : () => {}}
          onWheel={
            this.slideRefs[id] === openedImg ? this.scrollZoom : () => {}
          }
          style={galleryStyles(id)}
        />
        {this.slideRefs[id] === openedImg && (
          <div
            className='block'
            style={{
              height: `${openedImgData.size.height}px`,
              width: `${openedImgData.size.width}px`
            }}
          />
        )}
        {image.header && (
          <p className='text-uppercase font-weight-bold mt-4'>{image.header}</p>
        )}
      </MDBCol>
    ));
    return (
      <MDBContainer className='zoom-effect'>
        {openedImg && (
          <div className='ui-controls'>
            <p className='float-left text-white-50 mt-3 ml-3'>
              {activeKey + 1}/{images.length}
            </p>

            <MDBBtnGroup
              style={{ transition: `${transition / 2}ms`, right: '0' }}
            >
              <MDBBtn
                className={`pswp__button d-block z-depth-0 pswp__button--zoom`}
                color='transparent'
                onClick={this.scrollZoom}
              />
              <MDBBtn
                className={`pswp__button d-block z-depth-0 pswp__button--fs`}
                color='transparent'
                onClick={this.toggleFullscreen}
              />
              <MDBBtn
                className={`pswp__button d-block z-depth-0 pswp__button--close`}
                color='transparent'
                onClick={this.closeZoom}
              />
            </MDBBtnGroup>
            <div
              className='d-flex justify-content-between w-100'
              style={arrowsDivStyles}
            >
              <div
                className={
                  'pswp__button d-block z-depth-0 pswp__button--arrow--left prev'
                }
                style={arrowStyles}
                onClick={() => this.changeSlide('prev')}
              />
              <div
                className={
                  'pswp__button d-block z-depth-0 pswp__button--arrow--right next'
                }
                style={arrowStyles}
                onClick={() => this.changeSlide('next')}
              />
            </div>
          </div>
        )}
        <div
          className='overlay'
          ref={this.overlay}
          style={{ transition: `${transition}ms` }}
          onClick={this.closeZoom}
        ></div>
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
  xs: PropTypes.string,
  transition: PropTypes.number
};

LightBox.defaultProps = {
  noMargins: false,
  transition: 400
};

export default LightBox;
