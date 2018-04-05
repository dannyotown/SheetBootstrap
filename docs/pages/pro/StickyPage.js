import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';


class StickyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Choose your option",
    }
    this.optionClick = this.optionClick.bind(this);
  }

  optionClick(value) {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({value: value});

  }
  onClick(e) {
    // check if select is multiple
    if (e.target.dataset.multiple === 'true') {
      return;
    }

    if (e.target.classList.contains('select-dropdown')) {
      this.otherDropdownsClose();
      e.target.nextElementSibling.classList.add('fadeIn');
    } else {
      this.otherDropdownsClose();
    }
  }



  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return(
      <div className="container mt-5 primary-text">

      </div>
    );
  }
};

export default StickyPage;
