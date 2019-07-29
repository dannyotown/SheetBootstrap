import React, { useState, useEffect } from 'react';
import { Fa } from 'mdbreact';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Rating = props => {
  const [data, setData] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [choosed, setChoosed] = useState({
    title: '',
    index: null
  });

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    const choosedIndex = data.findIndex(item => item.choosed);

    if (choosedIndex !== -1) setChoosed({ title: data[choosedIndex].tooltip, index: choosedIndex });
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
    } else {
      setChoosed({ title, index });
    }
  };

  const {
    tag: Tag,
    iconClassName,
    iconFaces,
    iconSize,
    iconRegular,
    fillClassName,
    containerClassName,
    fillColors,
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
    renderedIcons = data.map(({ icon = 'star', tooltip, far, size, choosed: _, ...itemAttributes }, index) => {
      const isChoosed = choosed.index !== null;
      const isHovered = hovered !== null;
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

        switch (current) {
          case 0:
            fillColor = isCustom ? fillColors[0] : 'oneStar';
            break;
          case 1:
            fillColor = isCustom ? fillColors[1] : 'twoStars';
            break;
          case 2:
            fillColor = isCustom ? fillColors[2] : 'threeStars';
            break;
          case 3:
            fillColor = isCustom ? fillColors[3] : 'fourStars';
            break;
          case 4:
            fillColor = isCustom ? fillColors[4] : 'fiveStars';
            break;
          default:
            break;
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

      return (
        <Fa
          style={{ cursor: 'pointer' }}
          {...commonAttributes}
          {...itemAttributes}
          key={tooltip}
          icon={renderIcon}
          size={size || iconSize}
          far={far || iconRegular}
          className={iconClasses}
          data-index={index}
          data-original-title={tooltip}
          onMouseEnter={() => handleMouseEnter(tooltip, index)}
          onMouseLeave={() => handleMouseLeave()}
          onMouseDown={() => handleClick(tooltip, index)}
        />
      );
    });
  }

  return <Tag className={containerClasses}>{renderedIcons}</Tag>;
};

Rating.propTypes = {
  containerClassName: PropTypes.string,
  fillClassName: PropTypes.string,
  getValue: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.string, tooltip: PropTypes.string })),
  iconClassName: PropTypes.string,
  iconSize: PropTypes.string,
  iconRegular: PropTypes.bool,
  tag: PropTypes.string,
  tooltips: PropTypes.arrayOf(PropTypes.string)
};

Rating.defaultProps = {
  containerClassName: '',
  fillClassName: 'fiveStars',
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
  iconClassName: '',
  iconSize: '1x',
  iconRegular: false,
  tag: 'div'
};

export default Rating;
