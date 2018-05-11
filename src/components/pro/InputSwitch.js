import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InputSwitch extends React.Component {
  constructor(props) {
    super(props);
    let checked = props.checked;
    this.state = {
      switchState: checked
    }
    this.onSwitchChange = this.onSwitchChange.bind(this);
  }

  onSwitchChange() {
    if (this.state.switchState == 'checked') {
      this.setState({switchState: 'unchecked'});
    } else {
      this.setState({switchState: 'checked'});
    }
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
          <input onChange={this.onSwitchChange} disabled={this.props.disabled} type="checkbox" />
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
