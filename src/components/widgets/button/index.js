import React, { memo } from "react";
import Styles from "./button.module.css";
import Loader from "../loader";
import { useSelector } from "react-redux";
const Button = memo(({ size, text, styles, leftIcon, iconStyle, onClick }) => {
  const { isLoader, loaderText } = useSelector((state) => state.LoaderReducer);
  let buttonStyle = {};

  if (size === "small") {
    buttonStyle = {
      minWidth: "70px",
      height: "20px",
      fontSize: "12px",
      fontWeight: 400,
      padding: "8px",
    };
  } else if (size === "medium") {
    buttonStyle = {
      width: "100px",
      height: "25px",
      fontSize: "14px",
      padding: "12px 24px",
    };
  } else if (size === "large") {
    buttonStyle = {
      width: "140px",
      height: "30px",
      fontSize: "16px",
      padding: "16px 32px",
    };
  }
  console.log("-----text---", text);
  return (
    <div
      onClick={onClick}
      className={Styles.button}
      style={styles ? { ...buttonStyle, ...styles } : buttonStyle}
    >
      {leftIcon && (
        <div
          className={
            size === "small"
              ? Styles.iconSmall
              : size === "medium"
              ? Styles.iconMedium
              : size === "large"
              ? Styles.iconLarge
              : ""
          }
          style={iconStyle}
        >
          <img className={Styles.iconSize} src={leftIcon} />
        </div>
      )}
      <div className={Styles.buttonText}>
        {isLoader && loaderText == text ? (
          <Loader loaderStyle={Styles.buttonStyle} />
        ) : (
          text
        )}
      </div>
    </div>
  );
});

export default Button;
