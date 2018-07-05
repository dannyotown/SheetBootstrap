/* eslint jsx-a11y/href-no-hash: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM, { findDOMNode } from 'react-dom';

class SizePerPageOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiple: false,
      checked: false,
    }
    this.selectOption = this.selectOption.bind(this);
    this.otherDropdownsClose = this.otherDropdownsClose.bind(this);
  }

  selectOption() {
    this.otherDropdownsClose();
    if(!this.props.disabled) {
      let selectedOption = ReactDOM.findDOMNode(this);
      let value = selectedOption.children[0].textContent;
      if(this.props.icon) {
        value = selectedOption.children[1].textContent;
      }
      let options = selectedOption.parentNode.children;

      if(this.state.multiple) {
        let value = [];
        if (selectedOption.classList.contains('active')) {
          selectedOption.classList.remove('active');
          this.setState({checked: false});
          for (let i = 0; i < options.length; i++) {
            if (options[i].classList.contains('active')) {
              value.push(options[i].textContent);
            }
          }
          if (value.length === 0) {
            value = "Choose your option";
          }
          this.props.triggerOptionClick(value);
        } else {
          selectedOption.classList.add('active');
          this.setState({checked: true});
          for (let i = 0; i < options.length; i++) {
            if (options[i].classList.contains('active')) {
              value.push(options[i].textContent);
            }
          }
          this.props.triggerOptionClick(value);
        }
      } else {
        for (let i = 0; i < options.length; i++) {
          options[i].classList.remove('active');
        }
        selectedOption.classList.add('active');
        this.props.triggerOptionClick(value);
      }
    }
  }

  otherDropdownsClose() {
    let dropdowns = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('fadeIn')) {
        dropdowns[i].classList.remove('fadeIn');
      }
    }
  }

  render() {
    const {
      text,
      page,
      onSizePerPageChange
    } = this.props;

    return(
      <li key={ text } role="presentation" className="dropdown-item">
        <a
          href="#"
          tabIndex="-1"
          role="menuitem"
          data-page={ page }
          onMouseDown={ (e) => {
            e.preventDefault();
            this.selectOption();
            onSizePerPageChange(page);
          } }
        >
          { text }
        </a>
      </li>
    );
  };
};

SizePerPageOption.propTypes = {
  text: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onSizePerPageChange: PropTypes.func.isRequired
};

export default SizePerPageOption;
