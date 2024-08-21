import ReduxConstants from "../../constants/redux-constants";

export const loaderAction = (payload) => {
  return {
    type: ReduxConstants.UPDATE_LOADER_STATE,
    payload,
  };
};

export const loaderTextAction = (payload) => {
  return {
    type: ReduxConstants.SET_LOADER_TEXT,
    payload,
  };
};
