import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDBBox } from 'mdbreact';
import './GalleryList.css';
import { debounce } from '../../utils';

const imgClass = img => {
  if (!img || !img.complete) {
    return;
  }
  if (
    img.width / img.height >
    img.parentElement.offsetWidth / img.parentElement.offsetHeight
  ) {
    img.classList.remove('img-full-width');
    img.classList.add('img-full-height');
  } else {
    img.classList.remove('img-full-height');
    img.classList.add('img-full-width');
  }
};

function ensureImageCover(img) {
  if (!img) {
    return;
  }
  if (img.complete) {
    imgClass(img);
  } else {
    img.addEventListener('load', () => {
      imgClass(img);
    });
  }
}

const GalleryList = React.forwardRef(function GalleryList(props, ref) {
  const { children, className, cols, tag, rows, ...attributes } = props;

  const imgRef = useRef(null);

  useEffect(() => {
    ensureImageCover(imgRef.current);
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      imgClass(imgRef.current);
    });
    window.addEventListener('resize', handleResize);

    return () => {
      handleResize.clear();
      window.removeEventListener('resive', handleResize);
    };
  }, []);

  return (
    <MDBBox tag={tag} ref={ref} {...attributes} className='main'>
      <MDBBox className='title'>
        {React.Children.map(children, child => {
          if (!React.isValidElement) {
            return null;
          }
          if (child.type === 'img') {
            return React.cloneElement(child, {
              ref: imgRef
            });
          }
          return child;
        })}
      </MDBBox>
    </MDBBox>
  );
});

GalleryList.propTypes = {
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

GalleryList.defaultProps = {
  tag: 'li'
};

export default GalleryList;
export { GalleryList as MDBGalleryList };
