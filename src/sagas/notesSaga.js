import { call, put, takeEvery } from "redux-saga/effects";

import { FETCH_NOTES } from "../constants/actions";
import { notesRequest, notesResponse, notesFail } from "../actions/actions";
import firebaseAPI from "../firebase";

function* notesWorker() {
  try {
    let notesArray = [];
    yield put(notesRequest());
    yield call(() => {
      return new Promise(resolve => {
        firebaseAPI
          .database()
          .ref("notes")
          .on("child_added", snapshot => {
            resolve(snapshot.val());
            notesArray.push(snapshot.val());
          });
      });
    });
    yield put(notesResponse(notesArray));
  } catch (error) {
    yield put(notesFail());
  }
}

function* notesWatcher() {
  yield takeEvery(FETCH_NOTES, notesWorker);
}

export default notesWatcher;
