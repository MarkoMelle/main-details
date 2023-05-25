import { put, spawn, call, takeLatest } from "redux-saga/effects";
import getServiceDetails from "../api/getServiceDetails";
import getServices from "../api/getServices";
import {
  fetchServices,
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchServiceDetails,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} from "../features/servicesSlice";

function* fetchServicesSaga() {
  try {
    const data = yield call(getServices);
    yield put(fetchServicesSuccess(data));
  } catch (error) {
    yield put(fetchServicesFailure(error.message));
  }
}

function* watchFetchServicesSaga() {
  yield takeLatest(fetchServices.type, fetchServicesSaga);
}

function* fetchServiceDetailsSaga(action) {
  try {
    const data = yield call(getServiceDetails, action.payload);
    yield put(fetchServiceDetailsSuccess(data));
  } catch (error) {
    yield put(fetchServiceDetailsFailure(error.message));
  }
}

function* watchFetchServiceDetailsSaga() {
  yield takeLatest(fetchServiceDetails.type, fetchServiceDetailsSaga);
}

export default function* saga() {
  yield spawn(watchFetchServicesSaga);
  yield spawn(watchFetchServiceDetailsSaga);
}
