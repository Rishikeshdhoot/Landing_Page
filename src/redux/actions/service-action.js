import ReduxConstants from "../../constants/redux-constants";

export const serviceFormModalAction = (payload) => {
  return {
    type: ReduxConstants.SERVICE_FORM_MODAL,
    payload: payload,
  };
};

export const selectedServiceRequestAction = (payload) => {
  return {
    type: ReduxConstants.SELECTED_SERVICE_REQUEST,
    payload: payload,
  };
};

export const applyServiceRequestAction = (payload) => {
  return {
    type: ReduxConstants.APPLY_SERVICE_REQUEST,
    payload: payload,
  };
};
