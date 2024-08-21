import React from "react";
import Styles from "./loader.module.css";
import { appGIF } from "../../../constants/appImages";

const Loader = ({loaderStyle}) => {
  console.log(loaderStyle)
  return (
    <div className={Styles.loaderGIFBox} style={loaderStyle}>
      <img className={Styles.loaderSize} src={appGIF.loaderGIF} />
    </div>
  );
};

export default Loader;
