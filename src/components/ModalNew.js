import React, { Component, Fragment } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";

class ModalNew extends Component {
  // TODO: this.props.keyboard, focused, handleescape, proptypes

  // backdrop, zmapować atrybuty

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

  handleOnEntered = (type, node) => {
    if (type === "backdrop" && this.props.fade === false) {
      return;
    }

    node.classList.add("show");

    if (type === "modal") {
      this.props.showModal && this.props.showModal();
    }
  };

  handleOnExit = (type, node) => {
    if (type === "backdrop" && this.props.fade === false) {
      return;
    }

    node.classList.remove("show");

    if (type === "modal") {
      this.props.hideModal && this.props.hideModal();
    }
  };

  handleOnExited = node => {
    this.props.hiddenModal && this.props.hiddenModal();
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
      backdrop,
      backdropClassName,
      size,
      side,
      fullHeight,
      frame,
      centered,
      position,
      cascading,
      modalStyle,
      wrapClassName,
      animation,
      fade
    } = this.props;

    const timeout = fade ? 300 : 0;

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
      modalStyle && `modal-notify white-text modal-${this.props.modalStyle}`
    );

    const wrapperClasses = classNames(
      "modal",
      fade && `fade`,
      wrapClassName,
      fade &&
        (animation || (position && position.split("-").slice(-1)[0]) || "top")
    );

    const backdropClasses = classNames(
      "modal-backdrop",
      fade ? "fade" : "show",
      backdropClassName
    );

    return (
      <Fragment>
        {backdrop && (
          <Transition
            timeout={timeout}
            in={this.state.isOpen}
            mountOnEnter
            unmountOnExit
            onEntered={node => this.handleOnEntered("backdrop", node)}
            onExit={node => this.handleOnExit("backdrop", node)}
            onExited={this.handleOnExited}
          >
            <div className={backdropClasses} />
          </Transition>
        )}
        <Transition
          timeout={timeout}
          in={this.state.isOpen}
          mountOnEnter
          unmountOnExit
          appear={true}
          onClick={this.handleBackdropClick}
          onEntered={node => this.handleOnEntered("modal", node)}
          onExit={node => this.handleOnExit("modal", node)}
        >
          <div
            style={{ display: "block" }}
            onKeyUp={this.handleEscape}
            className={wrapperClasses}
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

ModalNew.defaultProps = {
  backdrop: true,
  fade: true
};

export default ModalNew;
