import React from "react";
import Styles from "./serviceCard.module.css";
import Button from "../../widgets/button";
import ServiceForm from "../../widgets/serviceFormModal";
import { useDispatch, useSelector } from "react-redux";
import {
  serviceFormModalAction,
  selectedServiceRequestAction,
} from "../../../redux/actions/service-action";

const ServiceCardNew = ({ key, coverPic, header, description, onClick }) => {
  const { serviceFormModal } = useSelector((state) => state.ServiceReducer);
  const dispatch = useDispatch();
  return (
    <div key={key} className={Styles.service_card}>
      <ServiceForm
        visible={serviceFormModal}
        serviceName={header}
        closeFormModal={() => {
          dispatch(serviceFormModalAction(false));
          dispatch(selectedServiceRequestAction(""));
        }}
      />
      <div className={Styles.serviceBox}>
        {coverPic && <img className={Styles.serviceCoverPic} src={coverPic} />}
      </div>
      <div>
        <h3 className={Styles.service_card_header}>{header}</h3>
        <p className={Styles.service_card_description}>{description}</p>
      </div>
      <div>
        <Button
          size={"small"}
          styles={{
            fontSize: "16px",
            fontWeight: "500",
            backgroundColor: "red",
          }}
          text={"Book Service"}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ServiceCardNew;
