import {
  FETCH_NOTES,
  NOTES_REQUEST,
  NOTES_RESPONSE,
  NOTES_FAIL
} from "../constants/actions";

export const fetchNotes = () => {
  return {
    type: FETCH_NOTES
  };
};

export const notesRequest = () => {
  return {
    type: NOTES_REQUEST
  };
};

export const notesResponse = data => {
  return {
    type: NOTES_RESPONSE,
    payload: data
  };
};

export const notesFail = () => {
  return {
    type: NOTES_FAIL
  };
};
