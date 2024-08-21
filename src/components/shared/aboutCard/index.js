
import Styles from "./aboutCard.module.css";

const AboutCard = ({ icon, header, paragraph }) => {
  
  return (
    <div className={Styles.aboutCard}>
      <div
        className={Styles.aboutCardIconBox}
        style={header === "Our Mission" ? { width: "60px" } : null}
      >
        <img className={Styles.aboutCardIcon} src={icon} />
      </div>
      <div className={Styles.aboutCardTextContainer}>
        <div className={Styles.aboutCardHeaderText}>{header}</div>
        <div className={Styles.aboutCardParagraph}>{paragraph}</div>
      </div>
    </div>
  );
};

export default AboutCard;
