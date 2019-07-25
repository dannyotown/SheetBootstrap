import React, { useState, useEffect } from 'react';
import { Fa } from 'mdbreact';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Rating = props => {
  const [tooltips, setTooltips] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [choosed, setChoosed] = useState({
    title: '',
    index: null
  });

  useEffect(() => {
    setTooltips(props.tooltips);
  }, [props.tooltips]);

  useEffect(() => {
    if (props.getValue) {
      props.getValue(choosed.title);
    }
  }, [choosed]);

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
    icon,
    iconSize,
    iconClassName,
    iconFaces,
    tooltips: tips,
    empty,
    fillClassName,
    containerClassName
  } = props;

  const containerClasses = classNames(
    'mdb-rating',
    'd-flex',
    'justify-content-start',
    'align-items-center',
    containerClassName
  );

  const renderedIcons = [...new Array(5)].map((_, index) => {
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

    const iconClasses = classNames('py-2 px-1', toFill ? fillClassName : 'rate-popover', iconClassName);

    let renderIcon = icon;

    if (iconFaces) {
      const faces = ['angry', 'frown', 'meh', 'smile', 'laugh'];
      renderIcon = 'meh-blank';

      if (index <= (isChoosed ? choosed.index : hovered)) {
        renderIcon = faces[hovered];
      }
    }

    return (
      <Fa
        key={tips[index]}
        icon={renderIcon}
        size={iconSize}
        onMouseEnter={() => handleMouseEnter(tooltips[index], index)}
        onMouseLeave={() => handleMouseLeave(tooltips[index], index)}
        onClick={() => handleClick(tooltips[index], index)}
        style={{ cursor: 'pointer', transition: 'all .3s' }}
        data-index={index}
        data-original-title={tooltips[index]}
        className={iconClasses}
        far={empty && !toFill}
      />
    );
  });

  return <Tag className={containerClasses}>{renderedIcons}</Tag>;
};

Rating.propTypes = {
  containerClassName: PropTypes.string,
  empty: PropTypes.bool,
  fillClassName: PropTypes.string,
  getValue: PropTypes.func,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOf(['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  iconClassName: PropTypes.string,
  tag: PropTypes.string,
  tooltips: PropTypes.arrayOf(PropTypes.string)
};

Rating.defaultProps = {
  containerClassName: '',
  empty: false,
  fillClassName: 'fiveStars',
  icon: 'star',
  iconSize: '1x',
  iconClassName: '',
  tag: 'div',
  tooltips: ['Very bad', 'Poor', 'Ok', 'Good', 'Excellent']
};

export default Rating;
