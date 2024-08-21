import React from "react";
import Styles from "./input.module.css";

const Input = ({
  value = "",
  type = "text",
  label = "",
  labelStyle,
  InputStyles,
  onChange,
}) => {
  return (
    <div className={Styles.inputContainer} style={InputStyles}>
      <div className={Styles.labelText} style={labelStyle && labelStyle}>
        {label}
      </div>
      <div className={Styles.inputBox}>
        <input
          type={type}
          className={Styles.inputStyle}
          // style={InputStyles}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
export default Input;
