import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectText: ''
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentDidUpdate(props, state) {
    if(state.selectValue !== this.state.selectValue && typeof this.props.getValue == 'function') {
      this.props.getValue(this.state.selectValue);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  getChildContext() {
    return {
      selectText: this.state.selectText,
      triggerOptionChange: this.triggerOptionChange,
      multiple: this.props.multiple
    }
  }

  triggerOptionChange = (value, text) => {
    (Array.isArray(text)) && (text = text.join(', '));
    this.setState({ ...this.state, selectValue: value, selectText: text });
  }

  // close all select dropdown (unless it has multiple property or search input)
  // open nieghbour ul of clicked input
  onClick = (e) => {
    if (e.target.dataset.multiple === 'true' || e.target.dataset.search === 'true') return;
    this.closeDropdowns();
    e.target.nextElementSibling && e.target.nextElementSibling.classList.add('fadeIn');
  }

  closeDropdowns = () => {
    let dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => dropdown.classList.contains('fadeIn') && dropdown.classList.remove('fadeIn'));
  }

  render() {
    const {
      className,
      children,
      multiple,
      color,
      getValue,
      ...attributes
    } = this.props;

    const classes = classNames(
      'select-wrapper',
      this.props.color ? 'colorful-select dropdown-' + this.props.color : '',
      className
    );

    return (
      <div { ...attributes } data-color={ color } data-multiple={ multiple }  onChange={ this.onChangeHandler } className={ classes }>
        <span className="caret">▼</span>
        {children}
      </div>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  getValue: PropTypes.func,
  multiple: PropTypes.bool,
  value: PropTypes.string
};

Select.defaultProps = {
  children: 'div',
  className: '',
  color: '',
  getValue: () => {},
  multiple: false,
  value: ''
};

Select.childContextTypes = {
  selectText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  triggerOptionChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool
};

export default Select;
export { Select as MDBSelect };
