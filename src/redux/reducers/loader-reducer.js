import ReduxConstants from "../../constants/redux-constants";

const initialState = {
  loaderText: "",
  isLoader: false,
};

function LoaderReducer(state = initialState, action) {
  switch (action.type) {
    case ReduxConstants.UPDATE_LOADER_STATE:
      return { ...state, isLoader: action?.payload };
    case ReduxConstants.SET_LOADER_TEXT:
      return { ...state, loaderText: action?.payload };
    default:
      return state;
  }
}

export default LoaderReducer;
