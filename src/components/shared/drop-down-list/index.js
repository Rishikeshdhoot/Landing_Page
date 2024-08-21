import React from "react";
import { appIcons } from "../../../constants/appImages";
import Styles from "./dropDownList.module.css";
const DropDownList = ({ list, visible }) => {
  return (
    <div className={Styles.DropDownListContainer}>
      <div className={Styles.DropDownListHeader}>Select Service:</div>
      <div className={Styles.dropDownViewContentContainer}>
        <div>fnsdkjs</div>
        <div className={Styles.listControlIconBox}>
          {visible ? (
            <img
              className={Styles.listControlIcon}
              src={appIcons.UpArrowIcon}
            />
          ) : (
            <img
              className={Styles.listControlIcon}
              src={appIcons.downArrowIcon}
            />
          )}
        </div>
      </div>
      {visible && (
        <div>
          {list.map((val, key) => {
            return <div>{val.item}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default DropDownList;
