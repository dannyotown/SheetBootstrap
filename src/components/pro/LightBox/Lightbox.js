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
    imgSrc: null,
    imgSrcData: null,
    resize: false,
    resizePos: {
      x: 0,
      y: 0
    },
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

  setScale = e => {
    const { screenSize } = this.state;
    const { height, width } = e.size;
    const margin = this.props.marginSpace;
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
      imgSrc: img,
      imgSrcData: {
        realW: img.naturalWidth,
        realH: img.naturalHeight,
        size: img.getBoundingClientRect()
      },
      scale:
        screenSize.x > screenSize.y
          ? img.getBoundingClientRect().width / img.naturalWidth
          : img.getBoundingClientRect().width / screenSize.x
    };
    data.zoomedScale = this.setScale(data.imgSrcData);
    return data;
  };

  zoom = e => {
    let { imgSrc } = this.state;
    const { transition } = this.props;
    const img = e.target;

    if (!imgSrc) {
      this.updateGalleryData();
      const dataOfImage = this.setData(img);
      const { left, top } = dataOfImage.imgSrcData.size;

      this.setState(dataOfImage, () => {
        img.style.cssText = `
          top: 0;
          left: 0;
          transform:  translate(${left}px, ${top}px) translate3d(0,0,0) scale(${dataOfImage.scale}) ;
          position: fixed;
        `;

        setTimeout(() => {
          document.body.classList.add('overflow-hidden');

          img.style.cssText = `
            transition: ${transition}ms; 
            transform: 
              translate(-50%,-50%) 
              translate3d(0,0,0)
              scale(${this.setScale(dataOfImage.imgSrcData)}) 
          `;

          img.classList.add('zoom');
          this.overlay.current.classList.add('active');

          setTimeout(() => {
            img.style.transition = `0ms`;
            this.setState({ sliderOpened: true });
          }, this.props.transition);
        }, 5);
      });
    }
  };

  closeZoom = () => {
    let { imgSrc, galleryImagesData, activeKey } = this.state;
    this.setState({ sliderOpened: false });
    let PREV_IMG =
      this.slideRefs[activeKey - 1] ||
      this.slideRefs[this.slideRefs.length - 1];
    let NEXT_IMG = this.slideRefs[activeKey + 1] || this.slideRefs[0];

    PREV_IMG.style.cssText = '';
    NEXT_IMG.style.cssText = '';

    document.body.classList.remove('overflow-hidden');
    imgSrc.classList.remove('zoom');
    imgSrc.style.cssText = `
        transition: ${this.props.transition}ms;
        z-index: 9999;
        top: 0;
        left: 0;
        transform: translate(${galleryImagesData[activeKey].imgSrcData.size.left}px, ${galleryImagesData[activeKey].imgSrcData.size.top}px) translate3d(0,0,0) scale(${galleryImagesData[activeKey].scale}) ;
        position: fixed;
      `;

    this.overlay.current.classList.remove('active');
    setTimeout(() => {
      imgSrc.style.cssText = '';
      this.setState(this.reset());
    }, this.props.transition);
  };

  scrollZoom = e => {
    if (this.slideRefs[this.state.activeKey] === this.state.imgSrc) {
      const SCALE_RATIO = this.props.scale || 0.1;
      const SCALE_UP = 1 + SCALE_RATIO;
      const SCALE_DOWN = 1 - SCALE_RATIO;
      const WHEEL_UP = e.deltaY < 0;
      const WHEEL_DOWN = e.deltaY > 0;
      const IMG_DATA = this.state.zoomedScale;
      let target;

      e.target.tagName === 'BUTTON'
        ? (target = this.slideRefs[this.state.activeKey])
        : (target = e.target);

      let scaleTransform = target.style.transform.split(' ');
      let scaleValue = Number(
        scaleTransform
          .filter(el => !el.search('scale'))[0]
          .replace('scale(', '')
          .replace(')', '')
      );

      let trans3d = this.slideRefs[this.state.activeKey].style.transform
        .split(') ')
        .filter(el => !el.search('translate3d'))
        .map(el => el.replace('translate3d(', ''))
        .map(el => el.replace(',', ''))[0]
        .split(' ')
        .map(el => Number(el.replace('px', '').replace(',', '')));

      target.style.transition = `${0}ms`;

      if (
        WHEEL_UP ||
        (e.button === 0 &&
          !e.target.classList.contains('lb-zoom-out') &&
          e.target.tagName === 'BUTTON')
      ) {
        if (scaleValue * SCALE_UP < IMG_DATA * 4) {
          scaleValue *= SCALE_UP;
        }
        this.setState({ resize: true });
      }
      if (
        WHEEL_DOWN ||
        (e.button === 0 && e.target.classList.contains('lb-zoom-out'))
      ) {
        if (scaleValue * SCALE_DOWN >= IMG_DATA) {
          scaleValue *= SCALE_DOWN;
          trans3d[0] *= SCALE_DOWN / 1.15;
          trans3d[1] *= SCALE_DOWN / 1.15;
        } else {
          scaleValue = IMG_DATA;
          this.setState({ resize: false });
          trans3d[0] = 0;
          trans3d[1] = 0;
          this.setState({
            resizePos: {
              x: 0,
              y: 0
            }
          });
        }
      }
      target.style.transform = `
        translate(-50%, -50%) 
        translate3d(${trans3d[0]}px,${trans3d[1]}px, 0px)
        scale(${scaleValue}) 
      `;
    }
  };

  toggleFullscreen = e => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      e.target.classList.remove('fullscreen');
    } else {
      document.documentElement.requestFullscreen();
      e.target.classList.add('fullscreen');
    }
  };

  changeSlide = direction => {
    const { activeKey, changeSlide, imgSrc, galleryImagesData } = this.state;
    const { transition } = this.props;

    let { slideRefs } = this;
    let CURRENT_IMG = imgSrc;
    let PREV_IMG = slideRefs[activeKey - 1] || slideRefs[slideRefs.length - 1];
    let NEXT_IMG = slideRefs[activeKey + 1] || slideRefs[0];
    let actual_key;
    const trans3d_Unset = index => `
      translate(-50%, -50%) 
      translate3d(0px, 0px, 0px) 
      scale(${galleryImagesData[index].zoomedScale})
    `;

    const change = () => {
      setTimeout(() => {
        PREV_IMG.style.transition = CURRENT_IMG.style.transition = NEXT_IMG.style.transition = `${0}ms`;
        let CURRENT = this.state.imgSrc;
        const dataOfImage = this.setData(CURRENT);

        this.setState(dataOfImage, () => {
          CURRENT.classList.add('zoom');
          CURRENT.style.cssText = `
            transform: 
              translate(-50%,-50%)
              translate3d(0,0,0)
              scale(${this.setScale(dataOfImage.imgSrcData)})
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
        this.setState({ imgSrc: PREV_IMG });
        change(actual_key);
      } else if (direction === 'next') {
        actual_key = this.slideRefs.indexOf(NEXT_IMG);

        CURRENT_IMG.classList.add('prev-img');
        NEXT_IMG.classList.remove('next-img');
        this.setState({ imgSrc: NEXT_IMG });
        change(actual_key);
      }
    }
  };

  dragStart = e => {
    if (!this.state.dragImg && this.state.imgSrc && !this.state.changeSlide) {
      let dragImgPos = {
        x: e.clientX || e.touches[0].clientX,
        y: e.clientY || e.touches[0].clientY
      };
      this.setState({
        dragImg: true,
        dragImgPos
      });
    } else {
      this.setState({
        changeSlide: false
      });
    }
  };

  dragMoveSlide = e => {
    const { activeKey, galleryImagesData, resize } = this.state;
    const { slideRefs } = this;
    if (this.state.dragImg && !resize) {
      let CURRENT_IMG = e.target;
      let PREV_IMG =
        slideRefs[activeKey - 1] || slideRefs[slideRefs.length - 1];
      let NEXT_IMG = slideRefs[activeKey + 1] || slideRefs[0];

      let dragPos = {
        x: e.clientX || e.touches[0].clientX,
        y: e.clientY || e.touches[0].clientY
      };

      let diffX = dragPos.x - this.state.dragImgPos.x;
      let diffY = dragPos.y - this.state.dragImgPos.y;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        this.setState({ dragPercent: (diffX / window.innerWidth) * 100 });

        let styleSlide = index =>
          `transform: 
          translate(-50%,-50%)
          translate3d(${diffX}px, 0, 0)  
          scale(${galleryImagesData[index].zoomedScale})
        `;

        CURRENT_IMG.style.cssText = styleSlide(activeKey);
        PREV_IMG.style.cssText = styleSlide(this.slideRefs.indexOf(PREV_IMG));
        NEXT_IMG.style.cssText = styleSlide(this.slideRefs.indexOf(NEXT_IMG));
      }
    } else if (this.state.dragImg && resize) {
      let CURRENT_IMG = e.target;
      let dragPos = {
        x: e.clientX || e.touches[0].clientX,
        y: e.clientY || e.touches[0].clientY
      };
      let CRR = galleryImagesData[activeKey];
      let scaleValue = Number(
        CURRENT_IMG.style.transform
          .split(' ')
          .filter(el => !el.search('scale'))[0]
          .replace('scale(', '')
          .replace(')', '')
      );

      let diffX = dragPos.x - this.state.dragImgPos.x + this.state.resizePos.x;
      let diffY = dragPos.y - this.state.dragImgPos.y + this.state.resizePos.y;

      let scaleX = (CRR.imgSrcData.realW * scaleValue) / 3;
      let scaleY = (CRR.imgSrcData.realH * scaleValue) / 3;

      if (diffX > scaleX) diffX = scaleX;
      else if (diffX < -scaleX) diffX = -scaleX;

      if (diffY > scaleY) diffY = scaleY;
      else if (diffY < -scaleY) diffY = -scaleY;

      CURRENT_IMG.style.cssText = `transform: 
        translate(-50%,-50%)
        translate3d(${diffX}px, ${diffY}px, 0)
        scale(${scaleValue})
      `;
    }
  };

  dragStop = () => {
    if (this.state.dragImg) {
      const { activeKey, dragPercent } = this.state;
      let dragPercentScale = 20;
      if (!this.state.resize) {
        if (dragPercent > dragPercentScale) {
          this.changeSlide('prev');
        } else if (dragPercent < -dragPercentScale) {
          this.changeSlide('next');
        } else {
          this.changeSlide(null);
        }
      } else {
        let trans3d = this.slideRefs[activeKey].style.transform
          .split(') ')
          .filter(el => !el.search('translate3d'))
          .map(el => el.replace('translate3d(', ''))
          .map(el => el.replace(',', ''))[0]
          .split(' ')
          .map(el => Number(el.replace('px', '').replace(',', '')));
        this.setState({
          resizePos: {
            x: trans3d[0],
            y: trans3d[1]
          }
        });
      }

      this.setState({
        dragImg: false,
        dragPercent: 0
      });
    }
  };

  render() {
    const {
      className,
      images,
      itemClassName,
      descriptionClassName,
      noMargins,
      lg,
      md,
      sm,
      size,
      xl,
      xs,
      transition
    } = this.props;

    const { activeKey, galleryImagesData, imgSrc, sliderOpened } = this.state;

    const lightBoxClasses = classNames(
      'mdb-lightbox d-flex flex-wrap',
      !noMargins && 'no-margin',
      className
    );

    const descriptionClasses = classNames(
      'text-uppercase font-weight-bold mt-4',
      descriptionClassName
    );

    const pswp__button = button =>
      classNames(`pswp__button d-block z-depth-0 pswp__button--${button}`);

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
            `translate(-50%, -50%) translate3d(0,0,0) scale(${this.setScale({
              realW: this.slideRefs[id].naturalWidth,
              realH: this.slideRefs[id].naturalHeight,
              size: this.slideRefs[id].getBoundingClientRect()
            })})`
        };
        return style;
      }
    };

    const items = images.map((image, id) => (
      <MDBCol
        tag='figure'
        lg={image.lg || lg}
        md={image.md || md}
        sm={image.sm || sm}
        xl={image.xl || xl}
        xs={image.xs || xs}
        size={size || image.size}
        className={image.className || itemClassName}
        key={id}
      >
        <img
          src={image.src}
          className={galleryClassNames(id)}
          alt={image.alt || `image ${id + 1}`}
          ref={img => (this.slideRefs[id] = img)}
          style={galleryStyles(id)}
          draggable={!imgSrc}
          onClick={this.zoom}
          onDragStart={e => e.preventDefault()}
          onMouseDown={this.dragStart}
          onTouchStart={this.dragStart}
          onMouseMove={this.dragMoveSlide}
          onTouchMove={this.dragMoveSlide}
          onMouseLeave={this.dragStop}
          onMouseUp={this.dragStop}
          onTouchEnd={this.dragStop}
          onWheel={this.scrollZoom}
        />
        {this.slideRefs[id] === imgSrc && (
          <div
            className='block'
            style={{
              height: `${galleryImagesData[activeKey].imgSrcData.size.height}px`,
              width: `${galleryImagesData[activeKey].imgSrcData.size.width}px`
            }}
          />
        )}
        {image.description && (
          <p className={descriptionClasses}>{image.description}</p>
        )}
      </MDBCol>
    ));
    return (
      <MDBContainer data-test='light-box'>
        {imgSrc && (
          <div className='ui-controls'>
            <p className='float-left text-white-50 mt-3 ml-3'>
              {activeKey + 1}/{images.length}
            </p>

            <MDBBtnGroup
              style={{ transition: `${transition / 2}ms`, right: '0' }}
            >
              <MDBBtn
                className={pswp__button('zoom')}
                color='transparent'
                onClick={this.scrollZoom}
              />

              <MDBBtn
                className={pswp__button('zoom lb-zoom-out')}
                color='transparent'
                onClick={this.scrollZoom}
              />

              <MDBBtn
                className={pswp__button('fs')}
                color='transparent'
                onClick={this.toggleFullscreen}
              />
              <MDBBtn
                className={pswp__button('close')}
                color='transparent'
                onClick={this.closeZoom}
              />
            </MDBBtnGroup>
            <div
              className='d-flex justify-content-between w-100 arrow-container'
              style={{ transition: `${transition}ms` }}
            >
              <div
                className={pswp__button('arrow--left prev')}
                onClick={() => this.changeSlide('prev')}
              />
              <div
                className={pswp__button('arrow--right next')}
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
        />
        <div className={lightBoxClasses}>{items}</div>
      </MDBContainer>
    );
  }
}

LightBox.propTypes = {
  images: PropTypes.array,
  itemClassName: PropTypes.string,
  noMargins: PropTypes.bool,
  marginSpace: PropTypes.number,
  lg: PropTypes.string,
  md: PropTypes.string,
  sm: PropTypes.string,
  size: PropTypes.string,
  xl: PropTypes.string,
  xs: PropTypes.string,
  transition: PropTypes.number
};

LightBox.defaultProps = {
  images: [],
  noMargins: false,
  marginSpace: 150,
  transition: 400
};

export default LightBox;
export { LightBox as MDBLightBox };