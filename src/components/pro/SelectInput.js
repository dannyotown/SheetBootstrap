import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SelectInput extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.context.triggerOptionChange(this.props.selected);
  }

  render() {
    const {
      className,
      children,
      value,
      ...attributes
    } = this.props;

    const classes = classNames(
      'select-dropdown',
      className
    );
    return (
      <input type="text" readOnly value={ this.context.selectText ? this.context.selectText : this.props.selected  } {...attributes} className={classes} onClick={this.handleClick} />
    );
  }
}

SelectInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selected: PropTypes.string,
  value: PropTypes.string
};

SelectInput.defaultProps = {
  children: 'div',
  className: '',
  selected: 'Choose your option',
  value: ''
};

SelectInput.contextTypes = {
  selectText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  triggerOptionChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool
};

export default SelectInput;
export { SelectInput as MDBSelectInput };
