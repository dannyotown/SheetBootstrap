import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { MDBBtn } from '../../Button';
import { MDBBtnGroup } from '../../ButtonGroup';
import { MDBCol } from '../../Col';
import { MDBContainer } from '../../Container';
import './Lightbox.css';

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
    this.updateGalleryData;
    // window.addEventListener('scroll', this.updateGalleryData, false);
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
    changeSlide: false,
    dragImg: false,
    dragImgPos: {},
    dragPercent: 0,
    galleryImagesData: [],
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

  updateGalleryData = () => {
    let gallery = [];
    if (this.slideRefs)
      this.slideRefs.map(el => gallery.push(this.setData(el)));
    this.setState({ galleryImagesData: gallery });
  };

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
      this.updateGalleryData();
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

          img.classList.add('zoom');
          this.overlay.current.classList.add('active');

          setTimeout(() => {
            img.style.transition = `0ms`;
            this.setState({ sliderOpened: true });
            console.log(this.state);
          }, this.props.transition);
        }, 5);
      });
    }
  };

  closeZoom = () => {
    let { openedImg, galleryImagesData, activeKey } = this.state;
    if (openedImg) {
      this.setState({ sliderOpened: false });
      let PREV_IMG =
        this.slideRefs[activeKey - 1] ||
        this.slideRefs[this.slideRefs.length - 1];
      let NEXT_IMG = this.slideRefs[activeKey + 1] || this.slideRefs[0];

      PREV_IMG.style.cssText = '';
      NEXT_IMG.style.cssText = '';

      document.body.classList.remove('overflow-hidden');
      openedImg.classList.remove('zoom');
      openedImg.style.cssText = `
        transition: ${this.props.transition}ms;
        z-index: 9999;
        top: 0;
        left: 0;
        transform: translate(${galleryImagesData[activeKey].openedImgData.size.left}px, ${galleryImagesData[activeKey].openedImgData.size.top}px) scale(${galleryImagesData[activeKey].scale});
        position: fixed;
      `;

      this.overlay.current.classList.remove('active');
      setTimeout(() => {
        openedImg.style.cssText = '';
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
    const IMG_SCALE = this.state.galleryImagesData[this.state.activeKey]
      .zoomedScale;
    let scaleTransform = e.target.style.transform.split(' ');
    let scaleValue = Number(
      scaleTransform
        .filter(el => !el.search('scale'))[0]
        .replace('scale(', '')
        .replace(')', '')
    );

    if (WHEEL_UP)
      if (scaleValue * SCALE_UP < IMG_SCALE * 4) {
        scaleValue *= SCALE_UP;
      }
    if (WHEEL_DOWN) {
      if (
        scaleValue * SCALE_DOWN >= IMG_SCALE
      ) {
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
    const { activeKey, changeSlide, openedImg, galleryImagesData } = this.state;
    const { transition } = this.props;

    let { slideRefs } = this;
    let CURRENT_IMG = openedImg;
    let PREV_IMG = slideRefs[activeKey - 1] || slideRefs[slideRefs.length - 1];
    let NEXT_IMG = slideRefs[activeKey + 1] || slideRefs[0];
    let actual_key;
    const trans3d_Unset = index => `
      translate3d(0px, 0px, 0px) 
      translate(-50%, -50%) 
      scale(${galleryImagesData[index].zoomedScale})
    `;

    const change = () => {
      setTimeout(() => {
        PREV_IMG.style.transition = CURRENT_IMG.style.transition = NEXT_IMG.style.transition = `${0}ms`;
        let CURRENT = this.state.openedImg;
        const dataOfImage = this.setData(CURRENT);

        this.setState(dataOfImage, () => {
          CURRENT.classList.add('zoom');
          CURRENT.style.cssText = `
            transform: 
              translate(-50%,-50%)
              scale(${this.setScale(dataOfImage.openedImgData)}) 
          `;
          this.setState({ changeSlide: false });
        });
      }, transition);
    };

    PREV_IMG.style.transition = CURRENT_IMG.style.transition = NEXT_IMG.style.transition = `${transition}ms`;
    CURRENT_IMG.style.transform = trans3d_Unset(activeKey);
    PREV_IMG.style.transform = trans3d_Unset(this.slideRefs.indexOf(PREV_IMG));
    NEXT_IMG.style.transform = trans3d_Unset(this.slideRefs.indexOf(NEXT_IMG));

    if (!changeSlide) {
      this.setState({ changeSlide: true });
      if (direction === 'prev') {
        actual_key = this.slideRefs.indexOf(PREV_IMG);

        CURRENT_IMG.classList.add('next-img');
        PREV_IMG.classList.remove('prev-img');
        this.setState({ openedImg: PREV_IMG });
        change(actual_key);
      } else if (direction === 'next') {
        actual_key = this.slideRefs.indexOf(NEXT_IMG);

        CURRENT_IMG.classList.add('prev-img');
        NEXT_IMG.classList.remove('next-img');
        this.setState({ openedImg: NEXT_IMG });
        change(actual_key);
      }
    } else {
      this.setState({ changeSlide: false });
    }
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
      const { activeKey, galleryImagesData } = this.state;
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

        let styleSlide = index =>
          `transform: 
          translate3d(${diffX}px, 0, 0)  
          translate(-50%,-50%)
          scale(${galleryImagesData[index].zoomedScale})
        `;

        CURRENT_IMG.style.cssText = styleSlide(activeKey);
        PREV_IMG.style.cssText = styleSlide(this.slideRefs.indexOf(PREV_IMG));
        NEXT_IMG.style.cssText = styleSlide(this.slideRefs.indexOf(NEXT_IMG));
      }
    }
  };

  dragStop = e => {
    if (this.state.dragImg) {
      const { dragPercent } = this.state;
      let dragPercentScale = 20;

      if (dragPercent > dragPercentScale) {
        this.changeSlide('prev');
      } else if (dragPercent < -dragPercentScale) {
        this.changeSlide('next');
      } else {
        this.changeSlide(null);
      }

      this.setState({
        dragImg: false,
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
      galleryImagesData,
      openedImg,
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
          onDragStart={e => e.preventDefault()}
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
              height: `${galleryImagesData[activeKey].openedImgData.size.height}px`,
              width: `${galleryImagesData[activeKey].openedImgData.size.width}px`
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
