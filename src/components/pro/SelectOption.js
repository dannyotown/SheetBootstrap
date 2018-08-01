import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Option extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      multiple: false,
      checked: false,
    };

    this.optionRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ multiple: this.context.multiple });
  }

  selectOption = (e) => {
    if(!this.props.disabled) {
      let selectedOption = this.optionRef.current;
      let value = [];
      let text;
      let options = selectedOption.parentNode.children;


      if(this.state.multiple) {
        text = [];
        if(selectedOption.classList.contains('active')) {
          selectedOption.classList.remove('active');
          this.setState({ checked: false });
        }
        else {
          selectedOption.classList.add('active');
          this.setState({checked: true});
        }

        // iterate throught child nodes options and add checked to arr
        Array.from(options).forEach(option => {
          if(option.classList.contains('active')){
            text.push(option.textContent);
            option.getElementsByTagName("input")[0].value ? value.push(option.getElementsByTagName("input")[0].value) : value.push(option.textContent);
          }
        });

        if(text.length === 0) {
          text = 'Choose your option';
        }
      }
      else {
        Array.from(selectedOption.children).forEach(child => {
          if(child.nodeName == 'SPAN') {
            text = child.textContent;
            this.props.value ? value.push(this.props.value) : value.push(child.textContent);
          }
        });
        Array.from(options).forEach(option => option.classList.remove('active'));
        selectedOption.classList.add('active');
      }
      this.context.triggerOptionChange(value, text);
    }
  }

  render() {
    const {
      className,
      children,
      disabled,
      icon,
      triggerOptionClick,
      ...attributes
    } = this.props;

    const classes = classNames(
      disabled ? 'disabled' : '',
      className
    );

    let input = null;
    let label = null;
    if (this.state.multiple) {
      if (!disabled) {
        input = <input type="checkbox" value={this.props.value} className="form-check-input" checked={this.state.checked}  />;
        label = <label style={{height: '10px'}} data-multiple={this.state.multiple}></label>;
      } else {
        input = <input type="checkbox" className="form-check-input" disabled />;
        label = <label style={{height: '10px'}} data-multiple={this.state.multiple}></label>;
      }
    }

    return (
      <li ref={this.optionRef} {...attributes} data-multiple={this.state.multiple} className={classes} onClick={this.selectOption}>
        {
          icon && <img src={this.props.icon} alt="icon" className="rounded-circle" />
        }
        <span data-multiple={this.state.multiple} className="filtrable">
          {input}
          {label}
          {children}
        </span>
      </li>
    );
  }
}

Option.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  triggerOptionClick: PropTypes.func
};

Option.defaultProps = {
  children: 'span',
  className: '',
  disabled: false,
  icon: '',
  triggerOptionClick: () => {}
};

Option.contextTypes = {
  triggerOptionChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool
};

export default Option;
export { Option as MDBSelectOption };

