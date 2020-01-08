import {
  ADD_NOTE,
  REMOVE_NOTE,
  MARK_NOTE,
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
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case MARK_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload) {
            note.isDone = !note.isDone;
          }
          return note;
        })
      };
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
