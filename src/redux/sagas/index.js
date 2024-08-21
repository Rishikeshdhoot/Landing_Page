import { takeLatest } from "redux-saga/effects";
import ReduxConstants from "../../constants/redux-constants";
import { applyService } from "./service-saga";
import { applyContactUsForm } from "./contact-saga";

export function* rootSaga() {
  yield takeLatest(ReduxConstants.APPLY_SERVICE_REQUEST, applyService);
  yield takeLatest(ReduxConstants.CONTACT_US_FORM_REQUEST, applyContactUsForm);
}
