import React, { useEffect, useState } from "react";
import Styles from "./isSuccessModa.module.css";
import Success from "../../../assets/images/Icons/successIcon.png";
import Error from "../../../assets/images/Icons/errorIcon.png";

const IsSuccessModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [IsSuccessModalData, setIsSuccessModalData] = useState(null);

  useEffect(() => {
    const openModalHandler = (event) => {
      setModalOpen(true);
      setIsSuccessModalData(event.detail);
    };

    // const closeModalHandler = () => {
    //   setModalOpen(false);
    //   setIsSuccessModalData(null);
    // };

    document.addEventListener("openModal", openModalHandler);
    // document.addEventListener("closeModal", closeModalHandler);

    return () => {
      document.removeEventListener("openModal", openModalHandler);
      //   document.removeEventListener("closeModal", closeModalHandler);
    };
  }, []);
  return (
    <>
      {modalOpen && (
        <div className={Styles.IsSuccessModalContainer}>
          <div className={Styles.IsSuccessModalIconBox}>
            <img
              style={Styles.IsSuccessModalIcon}
              src={IsSuccessModalData?.type == "success" ? Success : Error}
            />
          </div>
          <div className={Styles.IsSuccessModalTextBox}>
            <div className={Styles.IsSuccessModalHeader}>
              {IsSuccessModalData?.header}
            </div>
            <div className={Styles.IsSuccessModalSlogan}>
              {IsSuccessModalData?.slogan}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IsSuccessModal;
