import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const InputGroup = ({
  append,
  appendClassName,
  ariaLabel,
  className,
  children,
  inputClassName,
  inputID,
  inputName,
  inputs,
  inputType,
  inputValue,
  placeholder,
  label,
  material,
  prepend,
  prependClassName,
  size,
  textClassName,
  tag: Tag,
  inputTag: InputTag,
  ...attributes
}) => {
  const classes = classNames(
    "input-group",
    material && "md-form",
    size && `input-group-${size}`,
    className
  );

  const inputClassNames = classNames("form-control", inputClassName);

  const prependClassNames = classNames(
    "input-group-prepend",
    prependClassName
  );

  const appendClassNames = classNames("input-group-append", appendClassName);

  const textClassNames = classNames(
    "input-group-text",
    material && "md-addon",
    textClassName
  );

  return (
    <Tag {...attributes} className={classes}>
      {prepend && (
        <div className={prependClassNames}>
          {typeof prepend === "string" ? (
            <span className={textClassNames}>{prepend}</span>
          ) : (
            prepend
          )}
        </div>
      )}
      {inputs || (
        <InputTag
          type={inputType}
          className={inputClassNames}
          id={inputID}
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
          aria-label={ariaLabel}
        />
      )}
      {append && (
        <div className={appendClassNames}>
          {typeof append === "string" ? (
            <span className={textClassNames}>{append}</span>
          ) : (
            append
          )}
        </div>
      )}
      {children}
    </Tag>
  );

}

InputGroup.propTypes = {
  ariaLabel: PropTypes.string,
  append: PropTypes.any,
  appendClassNames: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  inputID: PropTypes.string,
  inputName: PropTypes.string,
  inputs: PropTypes.node,
  inputTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inputType: PropTypes.string,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  material: PropTypes.bool,
  prepend: PropTypes.any,
  prependClassName: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  textClassName: PropTypes.string
};

InputGroup.defaultProps = {
  tag: "div",
  inputTag: "input",
  inputType: "text"
};

export default InputGroup;
export { InputGroup as MDBInputGroup };