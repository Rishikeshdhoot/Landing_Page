import React from "react";
import Styles from "./longInput.module.css";

const InputLong = ({
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
        <textarea
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
export default InputLong;
