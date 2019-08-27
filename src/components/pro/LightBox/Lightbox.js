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
    window.addEventListener('resize', this.setScreenSize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScreenSize());
  }

  setScreenSize = () => {
    this.setState({
      screenSize: {
        x: window.innerWidth,
        y: window.innerHeight
      }
    });
  };

  reset = () => {
    return {
      activeKey: null,
      openedImg: '',
      openedImgData: null,
      screenSize: {
        x: window.innerWidth,
        y: window.innerHeight
      },
      scale: 0,
      zoomedScale: 0,
      scaleWheel: false
    };
  };

  updateScreenSize = () => {
    let d = document;
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
    let t = e;
    let img = t.target;
    if (!openedImg) {
      let data = this.setData(img);
      this.setState(data, () => {
        document.body.classList.add('overflow-hidden');
        img.style.cssText = `
          top: 0;
          left: 0;
          transform:  translate(${data.openedImgData.size.left}px, ${data.openedImgData.size.top}px) scale(${data.scale});
          position: fixed;
        `;
        setTimeout(() => {
          img.style.cssText = `
          transition: ${
            this.props.transition
          }ms; transform: scale(${this.setScale(
            data.openedImgData
          )}) translate(-50%,-50%) `;
          img.classList.add('zoom');
          this.overlay.current.classList.add('active');

          setTimeout(() => {
            img.classList.add('active');
          }, this.props.transition);
        }, 0);
      });
    }
  };

  closeZoom = () => {
    let { openedImg, openedImgData } = this.state;
    if (openedImg) {
      document.body.classList.remove('overflow-hidden');
      openedImg.classList.remove('active');
      openedImg.style.cssText = `
            transition: ${this.props.transition}ms;
            z-index: 9999;
            top: 0;
            left: 0;
            transform:  translate(${openedImgData.size.left}px, ${openedImgData.size.top}px) scale(${this.state.scale});
            position: fixed;
          `;
      openedImg.classList.remove('zoom');
      this.overlay.current.classList.remove('active');

      setTimeout(() => {
        openedImg.style.cssText = ``;
        this.setState(this.reset());
      }, this.props.transition);
    }
  };

  scrollZoom = e => {
    // let data = this.state.openedImgData.size;
    // let data = e.target.getBoundingClientRect();
    // let mouseData = {
    //   y: e.clientY - data.top*1.1 - data.height*1.1 / 2,
    //   x: e.clientX - data.left*1.1 - data.width*1.1 / 2
    // };

    // let mouseData = {
    //   y: (e.clientY - data.y - data.y / 4),
    //   x: (e.clientX - data.x - data.x / 4)
    // };

    // let mouseData = {
    //   y: e.clientY - data.y,
    //   x: e.clientX - data.x
    // };
    // console.log(mouseData, data);
    // console.log(data)

    let cssText = e.target.style.cssText;
    let scale = cssText.match(/scale\([0-9]+(\.)?[0-9]*\)/gi)[0];
    let scaleValue = Number(scale.match(/[0-9]+(\.)?[0-9]*/gi)[0]);
    if (e.deltaY < 0)
      scaleValue * 1.1 >= this.state.zoomedScale * 1.2
        ? (scaleValue = this.state.zoomedScale * 1.2)
        : (scaleValue = 1.2);

    if (e.deltaY > 0) {
      scaleValue * 0.9 <= this.state.zoomedScale
        ? (scaleValue = this.state.zoomedScale)
        : (scaleValue *= 0.9);
    }

    if (scaleValue == this.state.zoomedScale)
      this.setState({ scaleWheel: false });
    else this.setState({ scaleWheel: true });


    cssText = cssText.replace(scale, `scale(${scaleValue})`);
    e.target.style.cssText = cssText;
    
    // cssText = `${cssText} transform-origin: ${-mouseData.x}px ${mouseData.y}px;`;
    // console.log(e.target.getBoundingClientRect())
  };

  toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  changeSlide = direction => {
    const { activeKey, openedImg, screenSize } = this.state;
    let img;
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
    }, 0);
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
    const { activeKey, openedImg, openedImgData } = this.state;

    const lightboxClassNames = classNames(
      'mdb-lightbox d-flex flex-wrap',
      !noMargins && 'no-margin'
    );

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
        <div>
          <img
            src={image.src}
            className={`figure-img img-fluid z-depth-1 m-0`}
            alt={image.alt || `image ${id + 1}`}
            ref={img => (this.slideRefs[id] = img)}
            onClick={this.zoom}
            draggable={!openedImg}
            onWheel={
              this.slideRefs[id] === openedImg ? this.scrollZoom : () => {}
            }
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
        </div>
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
                onClick={this.toggleZoom}
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
