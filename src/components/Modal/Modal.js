import { Component } from "react";
import s from "./modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal--root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  //   componentDidUpdate() {}

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("нажали на ESC");
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    console.log("currentTarget", e.currentTarget);
    console.log("target", e.target);

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.modal__backdrop} onClick={this.handleBackdropClick}>
        <div className={s.modal__content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
