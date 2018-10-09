import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";

class ModalNew extends Component {
  // dodaje do body klase modal-open
  // tworze nowy element html na końcu elementu body (bęðzie portalem do którego wyrenderuje modala)
  // przez propsy toggle zmieniam state ( isOpen )

  // propsy są zmieniane również poprzez klinięcie backdop

  // TODO: this.props.keyboard
  // TODO: focused

  modalPortal = document.createElement("div");

  state = {
    isOpen: false
  };

  componentDidMount = () => {
    document.body.classList.add("modal-open");
    this.modalPortal.classList.add("modal-root");
    document.body.appendChild(this.modalPortal);
  };

  componentWillUnmount = () => {
    document.body.classList.remove("modal-open");
    document.body.removeChild(this.modalPortal);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  }

  // handleEscape = e => {
  //   // sprawdzić numer klawisza
  //   // if (this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
  //   if (e.keyCode === 27) {
  //     this.setState({ isOpen: false });
  //   }
  // };

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      <Fragment>
        <Transition
          timeout={300}
          in={this.state.isOpen}
          mountOnEnter
          unmountOnExit
          appear={true}
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
            <div className="modal-dialog" role="document">
              <div className="modal-content">{children}</div>
            </div>
          </div>
        </Transition>
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
      </Fragment>,
      this.modalPortal
    );
  }
}

export default ModalNew;
