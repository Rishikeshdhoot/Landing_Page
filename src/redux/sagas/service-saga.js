import { put, call, delay } from "redux-saga/effects";
import { applyServiceApi } from "../axios/axios-api";
import ReduxConstants from "../../constants/redux-constants";

export function* applyService(action) {
  try {
    yield put({
      type: ReduxConstants.UPDATE_LOADER_STATE,
      payload: true,
    });
    let response = yield call(applyServiceApi, action.payload);
    let { result, status } = response;

    if (status === 1) {
      yield put({
        type: ReduxConstants.UPDATE_LOADER_STATE,
        payload: false,
      });
      yield put({
        type: ReduxConstants.TOGGLE_TOAST,
        payload: {
          type: "success",
          message: result.msg,
          isToastVisible: true,
        },
      });
      yield delay(1000);
      yield put({
        type: ReduxConstants.SERVICE_FORM_MODAL,
        payload: false,
      });
    } else {
    }
  } catch (error) {
    yield put({
      type: ReduxConstants.UPDATE_LOADER_STATE,
      payload: false,
    });
    console.log(error);
  }
}
