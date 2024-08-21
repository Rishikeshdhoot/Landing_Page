import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let toastCounter = 0;
const toastLimit = 1;
let isToastInProgress = false;

const showToast = (message, type, options = {}) => {
  console.log(message);
  if (toastCounter < toastLimit && !isToastInProgress) {
    isToastInProgress = true;
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
      ...options,
      style: {
        color: "black",
        backgroundColor: options.backgroundColor || "white", // Use the provided backgroundColor or default to white
        ...options.style, // Additional style options
      },
      onClose: () => {
        toastCounter--;
        isToastInProgress = false;
      },
    });
    toastCounter++;
  } else {
    // Optionally, prevent further toasts or clear existing toasts
    // Or you can replace the oldest toast with a new one
  }
};

export { showToast, ToastContainer };
