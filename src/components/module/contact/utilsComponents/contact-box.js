import Styles from "./contact-box.module.css";

const ContactBox = ({ icon, type, text, slogan }) => {
  console.log(type)
  return (
    <div className={Styles.contactBox}>
      <div className={type=="Office"?Styles.locationBox:type=="Clinic"?Styles.locationBox:Styles.iconBox}>
        <img className={Styles.icon} src={icon} />
      </div>
      <div className={Styles.textContent}>
        <div className={Styles.highlightWord}>{type}</div>
        <div className={Styles.ContactBoxSlogan}>{slogan}</div>
        <div className={Styles.contactText}>{text}</div>
      </div>
    </div>
  );
};

export default ContactBox;
