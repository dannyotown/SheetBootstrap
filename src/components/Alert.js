import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

class Alert extends Component {

  render() {
   return (
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
    );
  }
}

Alert.defaultProps = {

};

Alert.propTypes = {

};

export default Alert;
export { Alert as MDBAlert };
