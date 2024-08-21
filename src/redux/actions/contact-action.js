import ReduxConstants from "../../constants/redux-constants";

export const contactUsRequestAction = (payload) => {
  return {
    type: ReduxConstants.CONTACT_US_FORM_REQUEST,
    payload: payload,
  };
};
