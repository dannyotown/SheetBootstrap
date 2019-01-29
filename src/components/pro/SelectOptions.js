import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Autocomplete from './Autocomplete';
import './Fade.css';

var data = [];

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(value, options) {
    options.forEach(function(option) {
      let optionValue = option.children[0].innerText.toLowerCase();
      if (!optionValue.includes(value)) {
        option.style.display = 'none';
      } else {
        option.style.display = 'block';
      }
    });
  }

  componentDidMount() {
    if (this.props.search) {
      let options = ReactDOM.findDOMNode(this).querySelectorAll('li');
      options.forEach(function(option) {
        data.push(option.children[0].innerHTML);
      });
    }
  }

  render() {
    const {
      className,
      children,
      search,
      searchLabel,
      searchId,
      ...attributes
    } = this.props;

    const classes = classNames(
      'dropdown-content',
      'select-dropdown',
      'fadeElement',
      className
    );

    let autocomplete = null;
    if (this.props.search) {
      autocomplete = (
        <div className="mx-2">
          <Autocomplete
            data={data}
            label={searchLabel}
            id={searchId}
            search={this.search}
            data-search="true"
          />
        </div>
      );
    }

    return (
      <ul {...attributes} className={classes}>
        {autocomplete}
        {children}
      </ul>
    );
  }
}

Options.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  search: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchId: PropTypes.string
};

Options.defaultProps = {
  className: '',
  search: false,
  searchLabel: 'Search',
  searchId: 'selectSearchInput'
};

export default Options;
export { Options as MDBSelectOptions };
