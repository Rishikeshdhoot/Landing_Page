import { combineReducers } from "redux";
import ServiceReducer from "./service-reducer";
import LoaderReducer from "./loader-reducer";
import ToastReducer from "./toast-reducer";
const RootReducer = combineReducers({
  ServiceReducer, // corrected property name and value
  LoaderReducer,
  ToastReducer,
});

export default RootReducer;
