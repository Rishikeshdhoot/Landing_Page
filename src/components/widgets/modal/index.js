import React from "react";
import Styles from "./modal.module.css";

const Modal = (props) => {
  return <div className={Styles.modalOverlay}>{props.children}</div>;
};

export default Modal;
