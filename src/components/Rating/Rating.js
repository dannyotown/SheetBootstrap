import React, { useState, useEffect } from 'react';
import { Fa } from 'mdbreact';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Rating = props => {
  const [tooltips, setTooltips] = useState([]);
  const [hovered, setHovered] = useState(0);
  const [choosed, setChoosed] = useState({
    title: '',
    index: null
  });

  useEffect(() => {
    setTooltips(props.tooltips);
  }, [props.tooltips]);

  const handleMouseEnter = (_, index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(0);
  };

  const handleClick = (title, index) => {
    if (title === choosed.title && index === choosed.index) {
      setChoosed({ title: '', index: null });
    } else {
      setChoosed({ title, index });
    }
  };

  const { tag: Tag, icon, iconSize, iconClassName, tooltips: tips } = props;

  const containerClasses = classNames('mdb-rating', 'd-flex', 'justify-content-start', 'align-items-center');
  const iconClasses = classNames('py-2 px-1', iconClassName);

  const renderedIcons = [...new Array(5)].map((_, index) => {
    const toFill = choosed.index ? index <= choosed.index : index <= hovered;

    return (
      <Fa
        key={tips[index]}
        icon={icon}
        size={iconSize}
        onMouseEnter={() => handleMouseEnter(tooltips[index], index)}
        onMouseLeave={() => handleMouseLeave(tooltips[index], index)}
        onClick={() => handleClick(tooltips[index], index)}
        style={{ cursor: 'pointer', transition: 'all .2s' }}
        data-index={index}
        data-original-title={tooltips[index]}
        className={`${toFill ? 'fiveStars' : 'rate-popover'} ${iconClasses}`}
      />
    );
  });

  return <Tag className={containerClasses}>{renderedIcons}</Tag>;
};

Rating.propTypes = {
  icon: PropTypes.string,
  iconSize: PropTypes.oneOf(['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  iconClassName: PropTypes.string,
  tag: PropTypes.string,
  tooltips: PropTypes.arrayOf(PropTypes.string)
};

Rating.defaultProps = {
  icon: 'star',
  iconSize: '1x',
  iconClassName: '',
  tag: 'div',
  tooltips: ['Very bad', 'Poor', 'Ok', 'Good', 'Excellent']
};

export default Rating;
