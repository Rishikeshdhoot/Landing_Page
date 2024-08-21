import React, { useState } from "react";
import ServiceCard from "../../shared/serviceCard";
import Styles from "./Service.module.css";
import { ServicesData } from "../../../assets/dummy-data";
import PhysiotherapyMen from "../../../assets/images/illustator/physiotherapy-men.jpg";
import useWindowResize from "../../../utils/useWindowResize";
import { useDispatch } from "react-redux";
import {
  applyServiceRequestAction,
  selectedServiceRequestAction,
  serviceFormModalAction,
} from "../../../redux/actions/service-action";

const Service = () => {
  const dispatch = useDispatch();
  const { width } = useWindowResize();
  return (
    <div className={Styles.serviceContainer}>
      <div className={Styles.upperSection}>
        <div
          className={Styles.upperSectionTextContent}
          style={{
            width: width > 480 && width < 765 && "100%",
          }}
        >
          <div className={Styles.serviceHeaderText}>Explore Our Service</div>
          <div
            className={Styles.serviceParagraphText}
            style={{
              fontSize: width > 480 && width < 765 && "15px",
              letterSpacing: width > 480 && width < 765 && "1px",
            }}
          >
            Physiotherapy services provide specialized care for individuals
            dealing with physical ailments, injuries, or movement restrictions.
            Skilled physiotherapists utilize various techniques, exercises, and
            modalities to promote healing, relieve pain, improve mobility, and
            enhance overall physical well-being. Through personalized treatment
            plans, physiotherapy aims to restore function, prevent future
            injuries, and optimize quality of life.
          </div>
        </div>
        {width > 765 && (
          <div className={Styles.upperSectionImageContainer}>
            <div className={Styles.illustratorBox}>
              <img className={Styles.illustrator} src={PhysiotherapyMen} />
            </div>
          </div>
        )}
      </div>

      <div className={Styles.serViceBox}>
        <div className={Styles.serviceContainerContent}>
          {ServicesData.map((val, index) => (
            <ServiceCard
              key={index}
              header={val.header}
              description={val.description}
              coverPic={val.coverPic}
              onClick={() => {
                dispatch(serviceFormModalAction(true));
                dispatch(selectedServiceRequestAction(val.header));
              }}
            />
          ))}
        </div>
        {/* <div className={Styles.serviceContainerContent}>
          {ServicesData.map((val, index) => (
            <ServiceCardNew
              key={index}
              header={val.header}
              description={val.description}
              coverPic={val.coverPic}
              onClick={() => {
                dispatch(serviceFormModalAction(true));
                dispatch(selectedServiceRequestAction(val.header));
              }}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Service;
