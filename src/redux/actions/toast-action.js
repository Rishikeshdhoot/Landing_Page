import ReduxConstants from "../../constants/redux-constants";

export const toastAction = (payload) => {
  console.log("------toastAction");
  console.log(payload);
  console.log("toastAction------");

  return {
    type: ReduxConstants.TOGGLE_TOAST,
    payload,
  };
};
