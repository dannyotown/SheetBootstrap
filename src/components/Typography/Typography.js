import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Typo = props => {
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
  } = props;

  const classes = classNames(
    variant && variant,
    colorText && `${colorText.toLowerCase()}-text`,
    className
  );
  const bc = classNames("blockquote", bqColor && `bq-${bqColor}`, className);

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
        {bqTitle && <p className="bq-title">{bqTitle}</p>}
        {children}
        {bgFooter && (
          <footer className="blockquote-footer mb-3">{bgFooter}</footer>
        )}
      </blockquote>
    );
  } else if (listUnStyled) {
    return <ul className="list-unstyled">{children}</ul>;
  } else if (listInLine) {
    return <ul className="list-inline">{children}</ul>;
  } else if (note) {
    return (
      <Tag className={`note note-${noteColor}`}>
        <strong>{noteTitle}</strong>
        {children}
      </Tag>
    );
  } else {
    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
};

Typo.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.object,
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
Typo.defaultProps = {
  component: "p",
  abbr: false,
  abbrLeftText: true,
  blockquote: false,
  listUnStyled: false,
  listInLine: false,
  noteColor: "primary"
};

export default Typo;
export { Typo as MDBTypo };
export { Typo as MDBTypogrphy };
