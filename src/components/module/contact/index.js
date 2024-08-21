import React from "react";
import { appImages } from "../../../constants/appImages";
import Styles from "./contact.module.css";
import ContactForm from "../../widgets/contactForm";
import ContactBox from "./utilsComponents/contact-box";
import { contactBoxData } from "../../../assets/dummy-data/index";
import GoogleMapReact from "google-map-react";
import useWindowResize from "../../../utils/useWindowResize";

const width = window.innerWidth;
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = ({}) => {
  const { width } = useWindowResize();

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className={Styles.ContactContainer}>
      {width > 480 ? (
        <div className={Styles.coverContainer}>
          <div className={Styles.CoverPicBox}>
            <img className={Styles.CoverPic} src={appImages.contactCoverPic} />
          </div>
          <div className={Styles.highlightLine}>
            It's time for all of us to take responsibility for our health
          </div>
          <div className={Styles.form}>
            <ContactForm />
          </div>
        </div>
      ) : (
        <div className={Styles.formBox}>
          <div className={Styles.highlightLine}>Get in touch</div>
          <div className={Styles.slogan}>
            We are here for you! How can we help?
          </div>
          <div className={Styles.form}>
            <ContactForm />
          </div>
        </div>
      )}
      <div className={Styles.informationSection}>
        <div className={Styles.contactResourceSection}>
          <div className={Styles.contactResourceSectionTextContainer}>
            <div className={Styles.contactResourceSectionHeader}>
              Contact information
            </div>
            <div className={Styles.contactResourceSectionSlogan}>
              We're open for any suggestion or just to have a chat
            </div>
          </div>
          <div className={Styles.resourceContainer}>
            {contactBoxData.map((val, key) => {
              return (
                <ContactBox
                  key={key}
                  icon={val.icon}
                  slogan={val.slogan}
                  type={val.type}
                  text={val.text}
                />
              );
            })}
          </div>
        </div>
        <div className={Styles.googleMapSection}>
          <img className={Styles.map} src={appImages.map} />
          {/* <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
