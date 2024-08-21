import { put, call } from "redux-saga/effects";
import { applyContactUsApi } from "../axios/axios-api";
import ReduxConstants from "../../constants/redux-constants";

export function* applyContactUsForm(action) {
  try {
    yield put({
      type: ReduxConstants.UPDATE_LOADER_STATE,
      payload: true,
    });

    let response = yield call(applyContactUsApi, action.payload);
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
    } else {
      yield put({
        type: ReduxConstants.UPDATE_LOADER_STATE,
        payload: false,
      });
      yield put({
        type: ReduxConstants.TOGGLE_TOAST,
        payload: {
          type: "error",
          message: result.msg,
          isToastVisible: true,
        },
      });
    }
  } catch (error) {
    yield put({
      type: ReduxConstants.UPDATE_LOADER_STATE,
      payload: false,
    });
    console.log(error);
  }
}
