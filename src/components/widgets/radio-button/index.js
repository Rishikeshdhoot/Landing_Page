import React, { useState } from "react";
import Styles from "./radio.module.css";

const RadioButton = ({ visible }) => {
  return (
    <div className={Styles.RadioButtonContainer}>
      {visible && <div className={Styles.visibleRadioButton}></div>}
    </div>
  );
};

export default RadioButton;
