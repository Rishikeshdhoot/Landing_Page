import React from "react";
import Styles from "./about.module.css";
import { appIcons, appImages } from "../../../constants/appImages";
import AboutCard from "../../shared/aboutCard";
import { AboutCardData } from "../../../assets/dummy-data";
import useWindowResize from "../../../utils/useWindowResize";

const About = () => {
  const { width } = useWindowResize();
  return (
    <div className={Styles.aboutContainer}>
      <div className={Styles.headerSection}>
        <div
          className={Styles.headerSectionContantContainer}
          style={{
            width: width > 480 && width < 765 && "100%",
          }}
        >
          <div className={Styles.aboutSectionTaxtHeader}>About Fornax</div>
          <p
            className={Styles.aboutSectionTaxtParagraph}
            style={{
              fontSize: width > 480 && width < 765 && "15px",
              letterSpacing: width > 480 && width < 765 && "1px",
            }}
          >
            Fornax is a versatile virtual platform that offers a wide range of
            paramedical/medical services for patients, including preventive care
            info and health care awareness blogs. It provides pediatric,
            geriatric, physiotherapy, occupational, pregnancy, patient home
            care, and elderly care services through a single platform. Fornax
            aims to enhance healthcare transparency, making service providers
            more accountable, and facilitating direct connections between
            patients and medical services in both urban and rural areas.
          </p>
        </div>
        {width > 765 && (
          <div className={Styles.aboutImageBox}>
            <img className={Styles.aboutImage} src={appImages.aboutImage} />
          </div>
        )}
      </div>
      <div className={Styles.aboutSectionCard}>
        {AboutCardData.map((val, key) => {
          return (
            <AboutCard
              key={key}
              icon={val.icon}
              header={val.header}
              paragraph={val.paragraph}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
