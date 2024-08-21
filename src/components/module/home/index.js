import React from "react";
import Styles from "./home.module.css";
import Slider from "../../shared/slider";
import { appIcons, appImages, dummyImages } from "../../../constants/appImages";
import Button from "../../widgets/button";
import Video from "../../../assets/video/Physical Therapy Ad Video Template (Editable).mp4";
import ReactPlayer from "react-player";
import DoctorPic from "../../../assets/images/Images/doctorPic.jpg";
import AndroidIcon from "../../../assets/images/Icons/android_icon.png";
import PhysiotherapyWomen from "../../../assets/images/illustator/physiotherapy-women.jpg";
import IOSIcon from "../../../assets/images/Icons/IOS_icon.png";
import { screensRoute } from "../../../constants/screens";
import { useNavigation } from "../../../utils/globalFunction";
import useWindowResize from "../../../utils/useWindowResize";
import ServiceCard from "../../shared/serviceCard";
import {
  ServicesChipsData,
  ServicesChipsDataTwo,
  ServicesData,
  conditions,
} from "../../../assets/dummy-data";
import { useDispatch } from "react-redux";
import {
  selectedServiceRequestAction,
  serviceFormModalAction,
} from "../../../redux/actions/service-action";

const dummImageArray = [
  dummyImages.cover_1,
  dummyImages.cover_2,
  dummyImages.cover_3,
  dummyImages.cover_4,
  dummyImages.cover_5,
];

const Home = () => {
  const navigate = useNavigation();
  const navigateHandler = () => {
    navigate(screensRoute.SERVICES);
  };
  const { width } = useWindowResize();
  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.coverPicSection}>
        <Slider images={dummImageArray} />
      </div>

      <div className={Styles.showServiceContainer}>
        <div className={Styles.showServiceBox}>
          <div className={Styles.upperSectionChips}>
            {ServicesChipsData.map((val, key) => (
              <div key={key} className={Styles.chipsBox}>
                {val}
              </div>
            ))}
          </div>
          <div className={Styles.upperSectionChips}>
            {ServicesChipsDataTwo.map((val, key) => (
              <div key={key} className={Styles.chipsBox}>
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Styles.videoSection}>
        <div className={Styles.videoBox}>
          <ReactPlayer
            className={Styles.VideoPlayer}
            url={Video}
            playing
            controls
            playIcon={
              <div className={Styles.playButton}>
                <img
                  className={Styles.playButtonIconStyle}
                  src={appIcons.playButtonIcon}
                />
              </div>
            }
            light={
              <img
                className={Styles.videoConverPic}
                src={appImages.videoCoverPic}
              />
            }
            width="100%"
            height="100%"
          />
        </div>
        <div className={Styles.videoTextParagraphSection}>
          <div className={Styles.videoParagraph}>
            Fornax is a revolutionary virtual platform providing comprehensive
            medical and healthcare services. It offers free preventive care,
            health awareness blogs, Gym guidance, Pediatric and geriatric care,
            physiotherapy, occupational therapy, home care, and baby care for
            working women. This platform empowers individuals in urban and rural
            areas, creating employment and personalized career growth
            opportunities.
          </div>
          <div className={Styles.buttonMoveServiceSection}>
            <Button
              size={width > 481 && width < 1024 ? "small" : "medium"}
              text={"Explore Service"}
              onClick={() => navigateHandler()}
            />
          </div>
        </div>
      </div>

      <div className={Styles.conditionContentContainer}>
        <div className={Styles.applicationAddTextBox}>
          <div className={Styles.applicationAddTextContent}>
            <h2>Conditions</h2>
            <div className={Styles.servicesBox}>
              {conditions.map((val, key) => (
                <div key={key} className={Styles.chipsBox}>
                  {val}
                </div>
              ))}
            </div>
          </div>
        </div>
        {width > 481 && (
          <div className={Styles.anatomyImageContainer}>
            <div className={Styles.anatomyImageBox}>
              <img className={Styles.anatomyImage} src={appImages.anatomy} />
            </div>
          </div>
        )}
      </div>

      <div className={Styles.applicationAddBox}>
        <div className={Styles.healthCareIllustratorContainer}>
          <div className={Styles.healthCareIllustratorBox}>
            <img
              className={Styles.healthCareIllustrator}
              src={PhysiotherapyWomen}
            />
          </div>
        </div>
        <div className={Styles.applicationAddTextBox}>
          <div className={Styles.applicationAddTextContent}>
            <h2>Download Our App</h2>
            <p>
              Introducing our specialized hospital download application, a
              secure and efficient solution for healthcare institutions.
              Designed to streamline file retrieval, it empowers medical
              professionals with swift access to critical patient data. With
              robust encryption and seamless integration, our application
              enhances efficiency, data security, and collaboration in
              hospitals.
            </p>
            <div className={Styles.appDownloadButtonSection}>
              <Button
                leftIcon={AndroidIcon}
                size={width > 481 && width < 1024 ? "small" : "medium"}
                text={"Android"}
              />
              <Button
                leftIcon={IOSIcon}
                size={width > 481 && width < 1024 ? "small" : "medium"}
                text={"IOS"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
