import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = props => {
  const {
    component: Tag,
    className,
    children,
    display,
    justifyContent,
    flex,
    alignItems,
    alignContent,
    alignSelf,
    color,
    flexCenter,
    flexColumn,
    m,
    mt,
    mtsm,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    ...attributes
  } = props;

  const marginOrPadding = (styles, position, number) => {
    if ((position.length === 0 || position === false) && number) {
      return styles && `${styles}-${number}`;
    } else if ((position.length > 0 || position === true) && number) {
      return styles && `${styles}${position}-${number}`;
    }
  };

  const classes = classNames(
    display && `d-${display}`,
    justifyContent && `justify-content-${justifyContent}`,
    flex && `flex-${flex}`,
    alignItems && `align-items-${alignItems}`,
    alignContent && `align-content-${alignContent}`,
    alignSelf && `align-self-${alignSelf}`,
    color && `${color}-text`,
    marginOrPadding('m', false, m),
    marginOrPadding('m', 't', mt),
    marginOrPadding('m', 't', 'sm', mtsm),
    marginOrPadding('m', 'r', mr),
    marginOrPadding('m', 'b', mb),
    marginOrPadding('m', 'l', ml),
    marginOrPadding('m', 'x', mx),
    marginOrPadding('m', 'y', my),
    marginOrPadding('p', false, p),
    marginOrPadding('p', 't', pt),
    marginOrPadding('p', 'r', pr),
    marginOrPadding('p', 'b', pb),
    marginOrPadding('p', 'l', pl),
    marginOrPadding('p', 'x', px),
    marginOrPadding('p', 'y', py),
    className
  );
  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

Box.defaultProps = {
  component: 'div'
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Box;
export { Box as MDBBox };
