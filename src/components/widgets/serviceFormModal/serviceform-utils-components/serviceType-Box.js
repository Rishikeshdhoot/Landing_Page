import Styles from "./serviceform-utils-components.module.css";

const ServiceTypeBox = ({ children, header, slogan, onRadioButtonHandler }) => {
  return (
    <div
      onClick={onRadioButtonHandler}
      className={Styles.ServiceTypeBoxContainer}
    >
      <div className={Styles.radioButton}>{children}</div>
      <div className={Styles.serviceTypeTextContainer}>
        <div className={Styles.serviceTypeTextHeader}>{header}</div>
        <div className={Styles.serviceTypeSlogan}>{slogan}</div>
      </div>
    </div>
  );
};
export default ServiceTypeBox;
