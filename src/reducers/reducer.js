import {
  FETCH_NOTES,
  NOTES_REQUEST,
  NOTES_RESPONSE,
  NOTES_FAIL
} from "../constants/actions";

const initialState = {
  notesIsLoading: false,
  notesIsLoaded: false,
  notesIsFail: false,
  notes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state
      };
    case NOTES_REQUEST:
      return {
        ...state,
        notesIsLoading: true
      };
    case NOTES_RESPONSE:
      return {
        ...state,
        notesIsLoading: false,
        notesIsLoaded: true,
        notes: action.payload
      };
    case NOTES_FAIL:
      return {
        ...state,
        notesIsLoading: false,
        notesIsLoaded: false,
        notesIsFail: true
      };
    default:
      return state;
  }
};

export default reducer;
