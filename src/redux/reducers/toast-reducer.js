import ReduxConstants from "../../constants/redux-constants";

const initialState = {
  type: "",
  message: "",
  isToastVisible: false,
};

function ToastReducer(state = initialState, action) {
  switch (action.type) {
    case ReduxConstants.TOGGLE_TOAST:
      console.log("ToastReducer-------------------------------");
      console.log(action?.payload.type);
      console.log(action?.payload.type);
      console.log(action?.payload.message);
      console.log(action?.payload.isToastVisible);
      console.log("ToastReducer---------------------------");
      return {
        ...state,
        type: action?.payload.type,
        message: action?.payload.message,
        isToastVisible: action?.payload.isToastVisible,
      };
    default:
      return state;
  }
}

export default ToastReducer;
