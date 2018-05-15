import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InputSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchState: this.props.checked
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      switchState: props.checked
    });
  }

  render() {
    const {
      className,
      checked,
      disabled,
      ...attributes
    } = this.props;

    const classes = classNames(
      'switch',
      className
    );
    return (
      <div {...attributes} className={classes}>
        <label>
          Off
          <input disabled={this.props.disabled} type="checkbox" />
          <span className="lever"></span>
          On
        </label>
      </div>
    );
  }
}

InputSwitch.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default InputSwitch;
