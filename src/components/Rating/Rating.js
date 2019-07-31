import React, { useState, useEffect } from 'react';
import {
  Fa,
  MDBTooltip,
  MDBBtn,
  MDBPopoverHeader,
  MDBPopoverBody
} from 'mdbreact';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Rating = props => {
  const [data, setData] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [choosed, setChoosed] = useState({
    title: '',
    index: null
  });
  const [feedbackValue, setFeedbackValue] = useState('');
  const [openedForm, setOpenedForm] = useState(null);

  const onDocumentClick = e => {
    if (!e.target.closest('.popover')) {
      setOpenedForm(null);
    }
  };

  useEffect(() => {
    window.addEventListener('click', onDocumentClick);
    return () => window.removeEventListener('click', onDocumentClick);
  }, []);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    const choosedIndex = data.findIndex(item => item.choosed);

    if (choosedIndex !== -1)
      setChoosed({ title: data[choosedIndex].tooltip, index: choosedIndex });
  }, [data]);

  useEffect(() => {
    if (props.getValue) {
      let { title, index } = choosed;
      index = index !== null ? index + 1 : index;

      props.getValue({ title, value: index });
    }
  }, [choosed, props]);

  const handleMouseEnter = (_, index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleClick = (title, index) => {
    if (title === choosed.title && index === choosed.index) {
      setChoosed({ title: '', index: null });
      feedback && setOpenedForm(null);
    } else {
      setChoosed({ title, index });
      feedback && setOpenedForm(index);
    }
  };

  const onCloseHanlder = () => {
    setFeedbackValue('');
    setOpenedForm(null);
  };

  const feedbackValueHandler = e => {
    setFeedbackValue(e.target.value);
  };

  const {
    tag: Tag,
    containerClassName,
    iconClassName,
    iconFaces,
    iconSize,
    iconRegular,
    fillClassName,
    fillColors,
    getValue,
    feedback,
    submitHandler,
    ...commonAttributes
  } = props;

  const containerClasses = classNames(
    'mdb-rating',
    'd-flex',
    'justify-content-start',
    'align-items-center',
    containerClassName
  );

  let renderedIcons = [];

  if (data.length) {
    renderedIcons = data.map(
      (
        { icon = 'star', tooltip, far, size, choosed: _, ...itemAttributes },
        index
      ) => {
        const isChoosed = choosed.index !== null;
        const isHovered = hovered !== null;
        const isFormOpened = openedForm !== null;

        let toFill = false;

        if (isChoosed) {
          toFill = index <= choosed.index;

          if (isHovered && hovered > choosed.index) {
            toFill = index <= hovered;
          }
        } else if (isHovered) {
          toFill = index <= hovered;
        }

        let fillColor = '';

        if (fillColors) {
          let current = null;

          if (isChoosed) {
            current = choosed.index;
            if (isHovered) current = hovered;
          } else if (isHovered) current = hovered;

          const isCustom = Array.isArray(fillColors);

          const defaultFillColors = [
            'oneStar',
            'twoStars',
            'threeStars',
            'fourStars',
            'fiveStars'
          ];

          if (current !== null) {
            fillColor = isCustom ? fillColors[current] : defaultFillColors[current];
          }
        }

        const iconClasses = classNames(
          'py-2 px-1 rate-popover',
          toFill && (fillColors ? fillColor : fillClassName),
          iconClassName
        );

        let renderIcon = icon;

        if (iconFaces) {
          const faces = ['angry', 'frown', 'meh', 'smile', 'laugh'];
          renderIcon = 'meh-blank';

          if (isChoosed && index <= choosed.index) {
            renderIcon = faces[choosed.index];

            if (isHovered) renderIcon = faces[hovered];
          } else if (isHovered && index <= hovered) {
            renderIcon = faces[hovered];
          }
        }

        let tooltipContent = tooltip;
        const isFormActive = feedback && isFormOpened && openedForm === index;

        if (isFormActive) {
          tooltipContent = (
            <form
              onSubmit={e =>
                submitHandler(e, tooltip, openedForm + 1, feedbackValue)
              }
            >
              <MDBPopoverHeader>{tooltip}</MDBPopoverHeader>
              <MDBPopoverBody>
                <textarea
                  type='text'
                  className='md-textarea form-control py-0'
                  value={feedbackValue}
                  onChange={feedbackValueHandler}
                />
                <div className='d-flex align-items-center justify-content-around mt-2'>
                  <MDBBtn type='submit' color='primary' size='sm'>
                    Submit!
                  </MDBBtn>
                  <button
                    onClick={onCloseHanlder}
                    style={{
                      backgroundColor: '#fff',
                      border: 'none',
                      padding: '0.5rem 1.6rem'
                    }}
                  >
                    Close
                  </button>
                </div>
              </MDBPopoverBody>
            </form>
          );
        }

        return (
          <MDBTooltip
            key={tooltip}
            domElement
            placement='top'
            tag='span'
            popover={isFormActive}
            isVisible={isFormActive}
            clickable={isFormActive}
          >
            <span>
              <Fa
                style={{ cursor: 'pointer' }}
                {...commonAttributes}
                {...itemAttributes}
                icon={renderIcon}
                size={size || iconSize}
                far={far || iconRegular}
                className={iconClasses}
                data-index={index}
                data-original-title={tooltip}
                onMouseEnter={() => handleMouseEnter(tooltip, index)}
                onMouseLeave={handleMouseLeave}
                onMouseDown={() => handleClick(tooltip, index)}
              />
            </span>
            <div>{tooltipContent}</div>
          </MDBTooltip>
        );
      }
    );
  }

  return <Tag className={containerClasses}>{renderedIcons}</Tag>;
};

Rating.propTypes = {
  containerClassName: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      tooltip: PropTypes.string,
      choosed: PropTypes.bool
    })
  ),
  fillClassName: PropTypes.string,
  fillColors: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  iconClassName: PropTypes.string,
  iconFaces: PropTypes.bool,
  iconSize: PropTypes.string,
  iconRegular: PropTypes.bool,
  tag: PropTypes.string,
  getValue: PropTypes.func,
  submitHandler: PropTypes.func
};

Rating.defaultProps = {
  containerClassName: '',
  data: [
    {
      tooltip: 'Very Bad'
    },
    {
      tooltip: 'Poor'
    },
    {
      tooltip: 'Ok'
    },
    {
      tooltip: 'Good'
    },
    {
      tooltip: 'Excellent'
    }
  ],
  fillClassName: 'fiveStars',
  iconClassName: '',
  iconSize: '1x',
  iconRegular: false,
  tag: 'div',
  submitHandler: e => e.preventDefault()
};

export default Rating;
export { Rating as MDBRating };
