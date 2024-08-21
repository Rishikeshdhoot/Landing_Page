import React from "react";
import Styles from "./footerItem.module.css";
import { useNavigation } from "../../../utils/globalFunction";
import { screensRoute } from "../../../constants/screens";
const FooterItem = ({ key, header, itemArray }) => {
  const navigate = useNavigation();
  const navigateHandler = () => {
    navigate(screensRoute.TERM_AND_CONDITION);
  };
  return (
    <div className={Styles.footerItemBox}>
      <div key={key} className={Styles.footerItemHeader}>
        {header}
      </div>
      {itemArray?.map((val, index) => (
        <div
          key={index}
          onClick={navigateHandler}
          className={Styles.footerItem}
        >
          {val.itemText}
        </div>
      ))}
    </div>
  );
};

export default FooterItem;
