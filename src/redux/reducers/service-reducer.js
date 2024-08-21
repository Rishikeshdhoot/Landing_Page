import ReduxConstants from "../../constants/redux-constants";

const initialState = {
  applyServiceRequest: "",
  serviceFormModal: false,
};

function ServiceReducer(state = initialState, action) {
  switch (action.type) {
    case ReduxConstants.SERVICE_FORM_MODAL:
      return {
        ...state,
        serviceFormModal: action?.payload,
      };
    case ReduxConstants.SELECTED_SERVICE_REQUEST:
      return {
        ...state,
        applyServiceRequest: action?.payload,
      };
    default:
      return state;
  }
}

export default ServiceReducer;
