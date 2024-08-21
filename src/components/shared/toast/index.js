import { useDispatch, useSelector } from "react-redux";
import { appIcons } from "../../../constants/appImages";
import Styles from "./toast.module.css";
import { useEffect } from "react";
import { toastAction } from "../../../redux/actions/toast-action";
const ToastNotification = () => {
  const { message, type } = useSelector((state) => state.ToastReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      const toastData = {
        type: "",
        message: "",
        isToastVisible: false,
      };
      dispatch(toastAction(toastData));
    }, 3000);
  }, []);
  return (
    <div className={Styles.toastContainer}>
      <div className={Styles.toastIcon}>
        <img
          className={Styles.icon}
          src={type == "error" ? appIcons.error : appIcons.success}
        />
      </div>
      <div className={Styles.toastTitle}>{message}</div>
      <div className={Styles.toastIcon}>
        <img className={Styles.iconClose} src={appIcons.close} />
      </div>
    </div>
  );
};

export default ToastNotification;
