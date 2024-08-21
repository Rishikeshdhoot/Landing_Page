import React from "react";
import Styles from "./footer.module.css";
import { footer_dummy_data } from "../../../assets/dummy-data/index";
import FooterItem from "../../widgets/footerItem";
import { appImages } from "../../../constants/appImages";
import useWindowResize from "../../../utils/useWindowResize";

const Footer = ({}) => {
  const { width } = useWindowResize();
  return (
    <div className={Styles.footerContainer}>
      <div className={Styles.footerContent}>
        <div className={Styles.footerCompanySection}>
          <div className={Styles.companyNameFooter}>Fornax</div>
          <div className={Styles.footerItem}>
            We Will Serve With All Our Heart And Full Service
          </div>
          {width > 480 && (
            <div className={Styles.bodyImageContainer}>
              <img className={Styles.bodyImage} src={appImages.skeleton} />
            </div>
          )}
        </div>
        {footer_dummy_data.map((val, index) => (
          <FooterItem  key={index} header={val.header} itemArray={val.item} />
        ))}
        {width > 480 && (
          <div className={Styles.bodyImageContainer}>
            <img className={Styles.bodyImage} src={appImages.body} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
