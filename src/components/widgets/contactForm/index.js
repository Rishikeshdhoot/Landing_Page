import React, { useCallback, useState } from "react";
import Button from "../button";
import { contactForm } from "../../../utils/validationFunction";
import Input from "../input";
import Styles from "./contactForm.module.css";
import { openServiceIsSuccessModal } from "../../../utils/eventTarget";
import InputLong from "../longInput";
import { useDispatch } from "react-redux";
import { contactUsRequestAction } from "../../../redux/actions/contact-action";
import { toastAction } from "../../../redux/actions/toast-action";
import { loaderTextAction } from "../../../redux/actions/loader-action";

const ContactForm = ({ serviceName }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const { name, email, phone, comment } = formData;

  const handleChange = (e, state) => {
    setFormData({ ...formData, [state]: e.target.value });
  };

  const handleOpenModal = (type) => {
    const slogan = "Discover the possibilities.";
    openServiceIsSuccessModal({ type, serviceName, slogan });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const checkValidator = contactForm(name, email, phone);

  //   if (checkValidator) {
  //     const toastData = {
  //       type: "error",
  //       message: checkValidator,
  //       isToastVisible: true,
  //     };
  //     dispatch(toastAction(toastData));
  //   } else {
  //     dispatch(contactUsRequestAction(formData));
  //     dispatch(loaderTextAction("Contact us"));
  //   }
  // };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const checkValidator = contactForm(name, email, phone);
      if (checkValidator) {
        const toastData = {
          type: "error",
          message: checkValidator,
          isToastVisible: true,
        };
        dispatch(toastAction(toastData));
      } else {
        dispatch(contactUsRequestAction(formData));
        dispatch(loaderTextAction("Contact us"));
      }
    },
    [name, email, phone]
  );

  return (
    <>
      <div className={Styles.modalContent}>
        <div className={Styles.contactUsText}>Contact Us</div>
        <form onSubmit={handleSubmit}>
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
          <div className={Styles.buttonSection}>
            <Button
              onClick={handleSubmit}
              size={"small"}
              styles={{
                fontSize: "16px",
                fontWeight: "500",
              }}
              text={"Contact us"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
