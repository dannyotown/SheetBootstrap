import React, { useState, useEffect } from 'react';
import { Fa } from 'mdbreact';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Rating = props => {
  const [icons, setIcons] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [choosed, setChoosed] = useState({
    title: '',
    index: null
  });

  useEffect(() => {
    setIcons(props.icons);
  }, [props.icons]);

  useEffect(() => {
    const choosedIndex = icons.findIndex(item => item.choosed);

    if (choosedIndex !== -1) setChoosed({ title: icons[choosedIndex].tooltip, index: choosedIndex });
  }, [icons]);

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

  const { tag: Tag, icons: data, iconClassName, iconFaces, fillClassName, containerClassName } = props;

  const containerClasses = classNames(
    'mdb-rating',
    'd-flex',
    'justify-content-start',
    'align-items-center',
    containerClassName
  );

  const renderedIcons = data.map(({ icon = 'star', tooltip, far = false, size = '2x' }, index) => {
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

      if (isChoosed && index <= choosed.index) {
        renderIcon = faces[choosed.index];

        if (isHovered) renderIcon = faces[hovered];
      } else if (isHovered && index <= hovered) {
        renderIcon = faces[hovered];
      }
    }

    return (
      <Fa
        key={tooltip}
        icon={renderIcon}
        size={size}
        onMouseEnter={() => handleMouseEnter(tooltip, index)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleClick(tooltip, index)}
        style={{ cursor: 'pointer', transition: 'all .3s' }}
        data-index={index}
        data-original-title={tooltip}
        className={iconClasses}
        far={far && !toFill}
      />
    );
  });

  return <Tag className={containerClasses}>{renderedIcons}</Tag>;
};

Rating.propTypes = {
  containerClassName: PropTypes.string,
  fillClassName: PropTypes.string,
  getValue: PropTypes.func,
  icons: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.string, tooltip: PropTypes.string })),
  iconClassName: PropTypes.string,
  tag: PropTypes.string,
  tooltips: PropTypes.arrayOf(PropTypes.string)
};

Rating.defaultProps = {
  containerClassName: '',
  fillClassName: 'fiveStars',
  icons: [
    {
      icon: 'star',
      tooltip: 'Very Bad',
      far: true
    },
    {
      icon: 'star',
      tooltip: 'Poor',
      far: true
    },
    {
      icon: 'star',
      tooltip: 'Ok',
      far: true
    },
    {
      icon: 'star',
      tooltip: 'Good',
      far: true
    },
    {
      icon: 'star',
      tooltip: 'Excellent',
      far: true
    }
  ],
  iconClassName: '',
  tag: 'div'
};

export default Rating;
