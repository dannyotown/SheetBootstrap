import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Typography.css';

class Typogrphy extends React.Component {
  render() {
    const {
      className,
      component: Tag,
      children,
      variant,
      abbr,
      abbrTitle,
      abbrText,
      abbrClasses,
      abbrLeftText,
      blockquote,
      bqColor,
      bqTitle,
      bgFooter,
      listUnStyled,
      listInLine,
      colorText,
      note,
      noteColor,
      noteTitle,
      ...attributes
    } = this.props;

    const classes = classNames(
      variant && variant,
      colorText && `${colorText.toLowerCase()}-text`,
      className
    );
    const bc = classNames('blockquote', bqColor && `bq-${bqColor}`, className);
    const notes = classNames('note', noteColor && `note-${noteColor}`);
    const isEmptyClass = classes !== '' ? classes : null;

    if (abbr) {
      return (
        <Tag {...attributes}>
          {abbrLeftText ? (
            <>
              <abbr title={abbrTitle} className={abbrClasses}>
                {abbrText}
              </abbr>
              {children}
            </>
          ) : (
            <>
              {children}
              <abbr title={abbrTitle} className={abbrClasses}>
                {abbrText}
              </abbr>
            </>
          )}
        </Tag>
      );
    } else if (blockquote) {
      return (
        <blockquote className={bc}>
          {bqTitle && <p className='bq-title'>{bqTitle}</p>}
          {children}
          {bgFooter && (
            <footer className='blockquote-footer mb-3'>{bgFooter}</footer>
          )}
        </blockquote>
      );
    } else if (listUnStyled) {
      return <ul className='list-unstyled'>{children}</ul>;
    } else if (listInLine) {
      return <ul className='list-inline'>{children}</ul>;
    } else if (note) {
      return (
        <Tag className={notes}>
          <strong>{noteTitle}</strong>
          {children}
        </Tag>
      );
    } else {
      return (
        <Tag {...attributes} className={isEmptyClass}>
          {children}
        </Tag>
      );
    }
  }
}

Typogrphy.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  variant: PropTypes.string,
  abbr: PropTypes.bool,
  abbrTitle: PropTypes.string,
  abbarText: PropTypes.string,
  abbrClasses: PropTypes.string,
  abbrLeftText: PropTypes.bool,
  blockquote: PropTypes.bool,
  bqColor: PropTypes.string,
  bqTitle: PropTypes.string,
  listUnStyled: PropTypes.bool,
  listInLine: PropTypes.bool,
  colorText: PropTypes.string,
  note: PropTypes.bool,
  noteColor: PropTypes.string,
  noteTitle: PropTypes.string
};
Typogrphy.defaultProps = {
  component: 'p',
  abbr: false,
  abbrLeftText: true,
  blockquote: false,
  listUnStyled: false,
  listInLine: false,
  noteColor: 'primary'
};

export default Typogrphy;
export { Typogrphy as MDBTypo };
export { Typogrphy as MDBTypogrphy };
