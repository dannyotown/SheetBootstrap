import React, { Component, Fragment } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";

class ModalNew extends Component {
  // propsy są zmieniane również poprzez klinięcie backdop
  // TODO: this.props.keyboard
  // TODO: focused
  // sprawdzić czy można usunąć animacje ( klasa fade / classnames )
  // handleescape

  // dodać propsa fade, zeby kontolować transition
  // show modal. hide, hidden, shown events
  // this.props.backdrop

  // sprawdić czy istnieje modal-root

  state = {
    isOpen: false
  };

  componentDidMount = () => {
    document.body.classList.add("modal-open");
  };

  componentWillUnmount = () => {
    document.body.classList.remove("modal-open");
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.isOpen !== this.props.isOpen ||
      prevState.isOpen !== this.props.isOpen
    ) {
      this.setState({ isOpen: this.props.isOpen });
    }
  };

  handleBackdropClick = e => {
    const container = document.getElementsByClassName("modal-content")[0];

    if (!container.contains(e.target)) {
      this.props.toggle();
    }
  };

  render() {
    const {
      children,
      className,
      size,
      side,
      fullHeight,
      frame,
      centered,
      position,
      cascading,
      modalStyle,
      animation
    } = this.props;

    const modalDialogClasses = classNames(
      "modal-dialog",
      className,
      size && `modal-${size}`,
      side && `modal-side`,
      fullHeight && `modal-full-height`,
      frame && `modal-frame`,
      centered && `modal-dialog-centered`,
      position && `modal-${this.props.position}`,
      cascading && `cascading-modal`,
      modalStyle && `modal-notify white-text modal-${this.props.modalStyle}`,
      animation
        ? animation
        : position
          ? this.props.position.split("-").slice(-1)[0]
          : `top`
    );

    return (
      <Fragment>
        <Transition
          timeout={(1, 300)}
          in={this.state.isOpen}
          mountOnEnter
          unmountOnExit
          onEntered={node => node.classList.add("show")}
          onExit={node => node.classList.remove("show")}
        >
          <div className="modal-backdrop fade" />
        </Transition>
        <Transition
          timeout={300}
          in={this.state.isOpen}
          mountOnEnter
          unmountOnExit
          appear={true}
          onClick={this.handleBackdropClick}
          onEntered={node => node.classList.add("show")}
          onExit={node => node.classList.remove("show")}
        >
          <div
            style={{ display: "block" }}
            onKeyUp={this.handleEscape}
            className="modal fade"
            id="basicExampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-modal="true"
          >
            <div className={modalDialogClasses} role="document">
              <div className="modal-content">{children}</div>
            </div>
          </div>
        </Transition>
      </Fragment>
    );
  }
}

export default ModalNew;
