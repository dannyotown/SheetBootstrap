import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBInput, MDBIcon } from 'mdbreact';
import classNames from 'classnames';
import './Autocomplete.css';

class Autocomplete extends Component {
  state = {
    filteredSuggestions: [],
    focused: false,
    focusedListItem: 0,
    showList: false,
    suggestions: [],
    initialValue: '',
    movedKey: false
  };

  autoInputRef = React.createRef();
  suggestionsList = React.createRef();

  componentDidMount() {
    const { data, value, valueDefault } = this.props;

    this.setState({
      suggestions: this.filterRepeated(data),
      initialValue: value || valueDefault
    });
    window.addEventListener('click', this.outsideClickHandler);
  }

  componentDidUpdate(prevProps, prevState) {
    const { getValue, value, data } = this.props;
    const { initialValue } = this.state;

    if (prevState.value !== initialValue && getValue) {
      getValue(initialValue);
    }
    if (prevProps.value !== value) {
      this.setState({ initialValue: value });
    }
    if (prevProps.data !== data) {
      this.setState({ suggestions: this.filterRepeated(data) });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.outsideClickHandler);
  }

  outsideClickHandler = e => {
    if (
      this.suggestionsList &&
      e.target !== this.suggestionsList &&
      e.target !== this.autoInputRef
    ) {
      return this.setState({ showList: false });
    }
  };

  tabClick = e => {};

  filterRepeated = data => {
    return data.filter((el, index) => data.indexOf(el) === index);
  };

  inputOnChangeHandler = e => {
    let { value } = e.target;

    this.setState({
      initialValue: value,
      focusedListItem: 0,
      showList: true
    });

    if (value !== '') {
      this.setSuggestions(value);
    } else {
      this.setSuggestions();
    }
  };

  setSuggestions = value => {
    const { suggestions } = this.state;
    const { noSuggestion } = this.props;
    if (value !== '' && value !== undefined) {
      const filteredSuggestions = suggestions.filter(suggest =>
        suggest.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({
        showList: true,
        filteredSuggestions:
          filteredSuggestions.length <= 0 ? noSuggestion : filteredSuggestions
      });
    } else {
      this.setState({
        showList: true,
        filteredSuggestions: suggestions
      });
    }
  };

  handleClear = () => {
    this.setState({ initialValue: '', focusedListItem: 0, showList: false });
  };

  handleSelect = () => {
    const { filteredSuggestions, focusedListItem } = this.state;
    let value = filteredSuggestions[focusedListItem];
    if (value && value !== 'No options') {
      this.setState({
        initialValue: value,
        focusedListItem: 0,
        showList: false
      });
    }
  };

  keyDownHandler = e => {
    const { filteredSuggestions, focusedListItem } = this.state;

    if (this.suggestionsList && filteredSuggestions) {
      let suggestionsListNodes = this.suggestionsList.childNodes;

      if (suggestionsListNodes.length >= 5) {
        suggestionsListNodes[focusedListItem].scrollIntoView({
          block: 'center'
        });
      }

      if (e.keyCode === 13) {
        this.handleSelect();
        this.setState({
          filteredSuggestions: []
        });
      }

      if (e.keyCode === 27) {
        this.setState({ filteredSuggestions: [] });
      }

      if (
        e.keyCode === 40 &&
        focusedListItem < filteredSuggestions.length - 1
      ) {
        this.setState({ focusedListItem: focusedListItem + 1 });
      } else {
        this.setState({ focusedListItem: 0 });
      }

      if (e.keyCode === 38 && focusedListItem > 0) {
        this.setState({ focusedListItem: focusedListItem - 1 });
      }

      if (e.keyCode === 35) {
        this.setState({ focusedListItem: filteredSuggestions.length - 1 });
      }

      if (e.keyCode === 36) {
        this.setState({ focusedListItem: 0 });
      }
    }
  };

  updateFocus = index => {
    this.setState({ focusedListItem: index, movedKey: true });
  };

  toggleFocusToClearBtn = focused => {
    this.setState({ focused });
  };

  render() {
    const {
      clear,
      clearClass,
      data,
      everyTimeShowContent,
      heightItem,
      labelClass,
      labelStyles,
      noSuggestion,
      placeholder,
      visibleOptions,
      whichData,
      ...attributes
    } = this.props;

    const {
      filteredSuggestions,
      focused,
      focusedListItem,
      showList,
      initialValue
    } = this.state;

    const labelClasses = classNames(labelClass, 'text-ellipsis-label');
    const inputClasses = classNames(placeholder, 'text-ellipsis-input');
    const btnClearClasses = classNames(
      clearClass,
      focused && 'autocomplete-btn-svg',
      'mdb-autocomplete-clear visible'
    );

    return (
      <div data-test='auto-complete' style={{ position: 'relative' }}>
        <MDBInput
          className={inputClasses}
          hint={placeholder}
          inputRef={ref => (this.autoInputRef = ref)}
          labelClass={labelClasses}
          labelStyles={{ width: '200px', ...labelStyles }}
          onBlur={() => this.toggleFocusToClearBtn(false)}
          onChange={this.inputOnChangeHandler}
          onClick={() => this.setSuggestions(initialValue)}
          onContextMenu={e => e.preventDefault()}
          onFocus={() => this.toggleFocusToClearBtn(true)}
          onKeyDown={this.keyDownHandler}
          value={initialValue}
          {...attributes}
        >
          {clear && initialValue && (
            <button onClick={this.handleClear} className={btnClearClasses}>
              <MDBIcon icon='times' style={{ color: focused && '#4285F4' }} />
            </button>
          )}
        </MDBInput>

        {showList && (
          <ul
            className='mdb-autocomplete-wrap'
            onClick={this.handleSelect}
            ref={ref => (this.suggestionsList = ref)}
            style={{
              marginTop: '-15px',
              maxHeight: `${heightItem * Number(visibleOptions)}px`
            }}
          >
            {filteredSuggestions.map((el, index) => {
              return (
                <li
                  className='list-item'
                  key={el + index}
                  // onMouseEnter={() => this.updateFocus(index)}
                  style={{
                    background: `${focusedListItem === index ? '#eee' : '#fff'}`
                  }}
                  data-index={index}
                >
                  {typeof el[0] === 'string' ? el : el[whichData]}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

Autocomplete.propTypes = {
  heightItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  noSuggestion: PropTypes.array,
  visibleOptions: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Autocomplete.defaultProps = {
  heightItem: 45,
  noSuggestion: ['No options'],
  visibleOptions: 5,
  labelStyles: ''
};

export default Autocomplete;
export { Autocomplete as MDBAutocomplete };
export { Autocomplete as MDBAuto };
