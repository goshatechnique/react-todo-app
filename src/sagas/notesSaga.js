import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { FETCH_NOTES } from "../constants/actions";
import { notesRequest, notesResponse, notesFail } from "../actions/actions";

const url = process.env.REACT_APP_DATABASE_URL;

function* notesWorker() {
  let data;
  try {
    yield put(notesRequest());
    yield call(async () => {
      return axios.get(`${url}/notes.json`).then(response => {
        data = Object.values(response.data);
        console.log("update");
      });
    });
    yield put(notesResponse(data));
  } catch (error) {
    yield put(notesFail());
  }
}

function* notesWatcher() {
  yield takeEvery(FETCH_NOTES, notesWorker);
}

export default notesWatcher;
