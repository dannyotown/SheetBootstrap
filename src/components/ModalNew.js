import React, { Component, Fragment } from "react";
import classNames from "classnames";
import { returnAttributes } from "./utils";
import { Transition } from "react-transition-group";

class ModalNew extends Component {
  //autoFocus, sprawdzić pozostałe propsy, proptypes

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
    node.focus();

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

  handleEscape = e => {
    if (e.keyCode === 27) {
      e.preventDefault();
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
      fade,
      tabIndex,
      role,
      id
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

    const modalAttributes = returnAttributes({
      style: { display: "block" },
      id: id || undefined,
      tabIndex: tabIndex,
      role: role,
      "aria-hidden": "true",
      "data-backdrop": "false"
    });

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
            ref={elem => (this.modalDialog = elem)}
            onKeyUp={this.handleEscape}
            className={wrapperClasses}
            {...modalAttributes}
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
  fade: true,
  isOpen: false,
  autoFocus: true,
  role: "dialog",
  zIndex: 1050,
  modalTransitionTimeout: 300,
  backdropTransitionTimeout: 150,
  tabIndex: "-1"
};

export default ModalNew;
