import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import './InputFile.css';

class InputFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: false
    };
    this.fileChange = this.fileChange.bind(this);
  }

  fileChange(files) {
    if (files.length > 0) {
      if (files.length > 1) {
        let filesNames = [];
        for (let i = 0; i < files.length; i++) {
          filesNames.push(files[i].name);
        }
        this.setState({ files: filesNames });
      } else {
        this.setState({ files: files[0].name });
      }
    } else {
      this.setState({ files: false });
    }
  }

  onChangeHandler = e => {
    this.fileChange(e.target.files);
    this.props.getValue && this.props.getValue(e.target.files);
  };

  render() {
    const {
      className,
      btnTitle,
      btnColor,
      textFieldTitle,
      multiple,
      reverse
    } = this.props;

    const btnClass = classNames(
      "btn",
      "btn-" + btnColor,
      "btn-sm",
      reverse ? "float-right" : "float-left"
    );

    const inputFieldClass = classNames(
      "file-path",
      "validate",
      this.state.files ? "valid" : false,
      className
    );

    const wrapperClass = classNames(
      "file-field",
      "md-form",
      reverse && "file-field-right"
    );

    return (
      <div className={wrapperClass}>
        <div className={btnClass}>
          <span>{btnTitle}</span>
          <input
            multiple={multiple}
            onChange={this.onChangeHandler}
            type="file"
          />
        </div>
        <div className="file-path-wrapper">
          <input
            className={inputFieldClass}
            type="text"
            placeholder={this.state.files ? this.state.files : textFieldTitle}
          />
        </div>
      </div>
    );
  }
}

InputFile.propTypes = {
  className: PropTypes.string,
  btnTitle: PropTypes.string,
  btnColor: PropTypes.string,
  textFieldTitle: PropTypes.string,
  multiple: PropTypes.bool,
  reverse: PropTypes.bool
};

InputFile.defaultProps = {
  btnTitle: "Choose file",
  textFieldTitle: "Upload your file",
  btnColor: "primary",
  reverse: false
};

export default InputFile;
export { InputFile as MDBFileInput };
