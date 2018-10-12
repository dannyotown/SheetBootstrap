import React, { Component, Fragment } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";

class ModalNew extends Component {
  // propsy są zmieniane również poprzez klinięcie backdop
  // TODO: this.props.keyboard
  // TODO: focused
  // sprawdzić czy można usunąć animacje ( klasa fade / classnames )
  // handleescape
  // proptypes

  // dodać propsa fade, zeby kontolować transition
  // show modal. hide, hidden, shown events
  // this.props.backdrop

  // sprawdić czy istnieje modal-root

  // DONE
  // size , side, fluid, animation, wrapClassName, hideModal, showModal, hiddenModal
  // TODO: shownModal, zacommitować

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

  handleOnEntered = node => {
    node.classList.add("show");
    this.props.showModal && this.props.showModal();
  };

  handleOnExit = node => {
    node.classList.remove("show");
    this.props.hideModal && this.props.hideModal();
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
      size,
      side,
      fullHeight,
      frame,
      centered,
      position,
      cascading,
      modalStyle,
      wrapClassName,
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
      modalStyle && `modal-notify white-text modal-${this.props.modalStyle}`
    );

    const wrapperClasses = classNames(
      "modal",
      "fade",
      wrapClassName,
      animation || (position && position.split("-").slice(-1)[0]) || "top"
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
          onExited={this.handleOnExited}
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
          onEntered={this.handleOnEntered}
          onExit={this.handleOnExit}
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

export default ModalNew;
