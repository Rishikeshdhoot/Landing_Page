import React, { useState } from "react";
import Button from "../button";
import { serViceForm } from "../../../utils/validationFunction";
import { showToast, ToastContainer } from "../../../utils/toast";
import CloseIcon from "../../../assets/images/Icons/close.png";
import Modal from "../modal";
import Input from "../input";
import Styles from "./service.module.css";
import RadioButton from "../radio-button";
import ServiceTypeBox from "./serviceform-utils-components/serviceType-Box";
import IsSuccessModal from "../../shared/isSuccessModal";
import { openServiceIsSuccessModal } from "../../../utils/eventTarget";
import { useDispatch, useSelector } from "react-redux";
import { applyServiceRequestAction } from "../../../redux/actions/service-action";
import InputLong from "../longInput";
import Loader from "../loader";
import { toastAction } from "../../../redux/actions/toast-action";
const ServiceFormModal = ({
  visible,
  closeFormModal,
  serviceName,
  children,
}) => {
  const dispatch = useDispatch();
  const { applyServiceRequest } = useSelector((state) => state.ServiceReducer);
  const { isLoader } = useSelector((state) => state.LoaderReducer);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    comment: "",
  });
  const { name, email, phone, serviceType, comment } = formData;

  const handleChange = (e, state, ServiceType = undefined) => {
    if (ServiceType) {
      setFormData({ ...formData, ["serviceType"]: ServiceType });
    } else {
      setFormData({ ...formData, [state]: e.target.value });
    }
  };

  const handleOpenModal = (type) => {
    const slogan = "Discover the possibilities.";
    openServiceIsSuccessModal({ type, serviceName, slogan });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkValidator = serViceForm(name, email, phone, applyServiceRequest);

    if (checkValidator) {
      const toastData = {
        type: "error",
        message: checkValidator,
        isToastVisible: true,
      };
      dispatch(toastAction(toastData));
    } else {
      dispatch(applyServiceRequestAction(formData));
      // handleOpenModal("success");
    }
  };
  return (
    <>
      {visible && (applyServiceRequest === serviceName || children) && (
        <Modal>
          <div className={Styles.modalContent}>
            <div onClick={closeFormModal} className={Styles.closeButton}>
              <img className={Styles.closeIcon} src={CloseIcon} />
            </div>
            <div className={Styles.formContent}>
              <div>
                <div className={Styles.selectedService}>{serviceName}</div>
              </div>
              <Input
                value={name}
                label={"Name:"}
                onChange={(e) => handleChange(e, "name")}
              />
              <Input
                value={phone}
                label={"Phone:"}
                onChange={(e) => handleChange(e, "phone")}
              />
              <Input
                value={email}
                label={"Email:"}
                onChange={(e) => handleChange(e, "email")}
              />
              <InputLong
                value={comment}
                label={"Describe:"}
                onChange={(e) => handleChange(e, "comment")}
              />
              {/* <div>{children}</div> */}
              <div className={Styles.serviceTypeContainer}>
                <div className={Styles.serviceTypeText}>Service Type:</div>
                <div className={Styles.radioButtonBox}>
                  <ServiceTypeBox
                    header={"Home Consultation"}
                    slogan={
                      "Hands-on medical services provided at the facility."
                    }
                    onRadioButtonHandler={() =>
                      handleChange("", "", "Physical Service")
                    }
                  >
                    <RadioButton visible={serviceType == "Physical Service"} />
                  </ServiceTypeBox>
                  <ServiceTypeBox
                    header={"Online Consultation"}
                    slogan={"Digital healthcare services from the hospital."}
                    onRadioButtonHandler={() =>
                      handleChange("", "", "Virtual Service")
                    }
                  >
                    <RadioButton visible={serviceType == "Virtual Service"} />
                  </ServiceTypeBox>
                </div>
              </div>
              <div className={Styles.buttonSection}>
                <Button
                  onClick={handleSubmit}
                  size={"small"}
                  styles={{
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                  text={"Apply Service"}
                />
              </div>
            </div>
          </div>
          <ToastContainer />
        </Modal>
      )}
    </>
  );
};

export default ServiceFormModal;
