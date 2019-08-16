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
    this.state = this.reset();

    this.activeDivRef = React.createRef();
    this.slideRefs = [];
  }
  reset = () => {
    return {
      activeSlider: false,
      target: null,
      targetData: { position: { height: 0, width: 0 }, value: '' },
      targetSaveData: null
    };
  };

  loadTarget = e => {
    let target = e.target;
    this.setState(
      {
        target: target,
        targetData: {
          position: target.getBoundingClientRect(),
          value: 'px',
          origin: `${target.getBoundingClientRect().top}px ${target.getBoundingClientRect().left}px`,
          scale: target.getBoundingClientRect().width / target.naturalWidth,
          display: 'none'
        }
      },
      () => {
        this.setState({
          targetSaveData: this.state.targetData
        });
      }
    );
  };

  activeSlider = e => {
    setTimeout(() => {
      this.setState({
        activeSlider: true,
        targetData: {
          position: {
            x: 0,
            y: 0
          },
          value: '%',
          origin: 'top left',
          // scale: 1,
          display: 'block',
          transition: this.props.transition
        }
      });
      console.log(this.state);
    }, 10);
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
    const { activeSlider, target, targetData } = this.state;

    const lightboxClassNames = classNames(
      'mdb-lightbox d-flex flex-wrap',
      !noMargins && 'no-margin'
    );
    const sliderClassNames = classNames('d-flex align-items-center');

    const lightboxUiClassNames = classNames();
    // background,
    // !objectFit && 'pswp--zoomed-in',
    // fullscreen && 'pswp--fs'

    const sliderStyles = {
      height: '100vh',
      width: '100vw',
      left: '0',
      top: '0',
      position: 'fixed',
      zIndex: activeSlider ? '9999' : '-999',
      display: activeSlider && 'flex'
    };
    const slideStyles = {
      height: activeSlider && `90vh` ,
      width: activeSlider && '100vw',
      position: 'relative'
    };

    const aroundImagesStyles = {
      transform: `scale(${targetData.scale}) `
    };
    const targetStyles = {
      transition: `1000ms`,
      transform: `scale(${targetData.scale})`, // translate3d(${-targetData.position.x + targetData.value}, ${-targetData.position.y +targetData.value}, 0)`, // translate3d(${-targetData.position.x + targetData.value}, ${-targetData.position.y +targetData.value}, 0)
      transformOrigin: targetData.origin,
      position: 'absolute',
      display: targetData.display,
      objectFit: 'contain',
      // maxHeight: activeSlider && '100vh',
      // maxWidth: activeSlider && '100vw',
      height: '100%',
      width:'100%',
      // padding: activeSlider ? '50px 0px' : '0px 0px'
      // margin: activeSlider ? '0 50%' : '0 0',
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
        className='figure'
        key={id}
      >
        <img
          src={image.src}
          className='figure-img img-fluid z-depth-1 m-0'
          alt={image.alt || `image ${id + 1}`}
          ref={img => (this.slideRefs[id] = img)}
          style={{ userSelect: 'none' }}
          onMouseDown={this.loadTarget}
          onMouseMove={this.loadTarget}
          onTouchStart={this.loadTarget}
          onClick={this.activeSlider}
        />
        {image.header && (
          <p className='text-uppercase font-weight-bold mt-4'>{image.header}</p>
        )}
      </MDBCol>
    ));
    return (
      <MDBContainer>
        <div id='mdb-lightbox-ui' className={lightboxUiClassNames}>
          <div className={sliderClassNames} style={sliderStyles}>
            {/* {activeSlider && <img src={target.src} alt={target.alt} style={targetStyles} />} */}
            {target && (
              <div className='' style={slideStyles}>
                <img src={target.src} alt={target.alt} style={targetStyles} />
              </div>
            )}
          </div>
          <div className='UI'>dsadsa</div>
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
  xs: PropTypes.string,
  transition: PropTypes.number
};

LightBox.defaultProps = {
  noMargins: false,
  transition: 10000
};

export default LightBox;
