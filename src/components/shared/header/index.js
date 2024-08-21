import * as React from "react";
import styles from "./header.module.css";
import { Link, useMatch, useNavigation } from "react-router-dom";
import { screensRoute, screensText } from "../../../constants/screens";
import { appIcons } from "../../../constants/appImages";
import Button from "../../widgets/button";
import ServiceFormModal from "../../widgets/serviceFormModal";
import { useDispatch, useSelector } from "react-redux";
import {
  applyServiceRequestAction,
  serviceFormModalAction,
} from "../../../redux/actions/service-action";
import DropDownList from "../drop-down-list";

const Header = () => {
  const homeMatch = useMatch(screensRoute.HOME);
  const aboutMatch = useMatch(screensRoute.ABOUT);
  const servicesMatch = useMatch(screensRoute.SERVICES);
  const contactMatch = useMatch(screensRoute.CONTACT);
  let [width, setWidth] = React.useState(window.innerWidth);
  let [height, setHeight] = React.useState(window.innerHeight);
  let [humber, setHumber] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    window.addEventListener("resize", getHeight);
  }, []);

  // const navigate = useNavigation();
  // const navigateHandler = () => {
  //   navigate(screensRoute.SERVICES);
  // };

  const updateWindowDimensions = () => {
    const newHeight = window.innerWidth;
    setWidth(newHeight);
  };

  const getHeight = () => {
    const height = window.innerHeight;
    setHeight(height);
  };

  let closeHumberger = function (navbar_type, where_Clicked) {
    setHumber(false);
  };

  let HumberFun = function () {
    setHumber(humber ? false : true);
  };
  const { serviceFormModal } = useSelector((state) => state.ServiceReducer);
  const dispatch = useDispatch();
  return (
    <div className={styles.navbar}>
      <div className={styles.headerBox}>
        <div className={styles.logoBox}>Fornax</div>
        {width >= 480 ? (
          <div className={styles.navBox}>
            <div className={styles.linkBox}>
              <Link
                className={homeMatch ? styles.activeRoute : styles.route}
                to={screensRoute.HOME}
              >
                {screensText.HOME}
              </Link>
              <Link
                className={servicesMatch ? styles.activeRoute : styles.route}
                to={screensRoute.SERVICES}
              >
                {screensText.SERVICES}
              </Link>
              <Link
                className={aboutMatch ? styles.activeRoute : styles.route}
                to={screensRoute.ABOUT}
              >
                {screensText.ABOUT}
              </Link>
              <Link
                className={contactMatch ? styles.activeRoute : styles.route}
                to={screensRoute.CONTACT}
              >
                {screensText.CONTACT}
              </Link>
              {/* <Button
                onClick={() => {
                  dispatch(serviceFormModalAction(true));
                }}
                styles={{ fontSize: "15px", fontWeight: "600" }}
                size={"small"}
                text={"Book Service"}
              /> */}
            </div>
            {/* <div className={styles.authLinkBox}>
              <div className={styles.authActiveButton}>
                <div>Book Service</div>
              </div>
            </div> */}
          </div>
        ) : (
          <div onClick={HumberFun} className={styles.humberBox}>
            <img className={styles.humberBox} src={appIcons.menuIcon} />
          </div>
        )}
      </div>
      {humber ? (
        <div className={styles.humberDrop}>
          <Link
            className={homeMatch ? styles.activeRoute : styles.route}
            to={screensRoute.HOME}
          >
            {screensText.HOME}
          </Link>
          <Link
            className={servicesMatch ? styles.activeRoute : styles.route}
            to={screensRoute.SERVICES}
          >
            {screensText.SERVICES}
          </Link>
          <Link
            className={contactMatch ? styles.activeRoute : styles.route}
            to={screensRoute.CONTACT}
          >
            {screensText.CONTACT}
          </Link>
          <Link
            className={aboutMatch ? styles.activeRoute : styles.route}
            to={screensRoute.ABOUT}
          >
            {screensText.ABOUT}
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
