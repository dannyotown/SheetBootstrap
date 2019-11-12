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
    blockquoteClasses,
    blockquoteColor,
    bqTitle,
    bgFooter,
    listUnStyled,
    listInLine,
    colorText,
    ...attributes
  } = props;

  const classes = classNames(
    variant && variant,
    colorText && `${colorText.toLowerCase()}-text`,
    className
  );
  const bc = classNames(
    "blockquote",
    blockquoteColor && `bq-${blockquoteColor}`,
    className
  );

  if (abbr) {
    return (
      <p {...attributes}>
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
      </p>
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
  } else {
    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
};

Typo.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  component: PropTypes.string
};

Typo.defaultProps = {
  component: "",
  abbrLeftText: true
};

export default Typo;
export { Typo as MDBTypo };
export { Typo as MDBTypogrphy };
