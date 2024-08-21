import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../sagas";
import RootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
