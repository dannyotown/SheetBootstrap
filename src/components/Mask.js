import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class Mask extends React.Component {
  render() {
    const {
      className,
      children,
      pattern,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'mask',
      pattern && `pattern-${pattern}`,
      className
    );
    return (
      <Tag {...attributes} className={classes}>{this.props.children}</Tag>
    );
  }
}

Mask.defaultProps = {
  tag: 'div'
};

Mask.propTypes = {
  tag: PropTypes.string,
  pattern: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Mask;
