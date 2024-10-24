import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, children, title }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-content">{children}</div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
