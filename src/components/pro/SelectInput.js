import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import selectContextHOC from "./SelectContext";

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    if (props.selected) {
      props.context.selected = props.selected;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selected) {
      this.props.context.selected = this.props.selected;
    }
  }

  render() {
    const classes = classNames("select-dropdown", this.props.className);
    const { attributes, context } = this.props;

    let value = "";

    if (context.state.isEmpty){
      if (context.label){
        value = "";
      }else{
        value = this.props.context.selected;
      }
    }else{
      value = context.state.selectTextContent
    }

    return (
      <input
        type="text"
        readOnly
        // value={context.state.isEmpty ? "" : context.state.selectTextContent}
        value={value}
        {...attributes}
        className={classes}
      />
    );
  }
}

SelectInput.propTypes = {
  context: PropTypes.object.isRequired,
  className: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SelectInput.defaultProps = {
  className: ""
};

export default (SelectInput = selectContextHOC(SelectInput));
export { SelectInput as MDBSelectInput };
