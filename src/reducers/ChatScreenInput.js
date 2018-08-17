import { CHAT_SCREEN_INPUT,
          START_LOADING_SKELETON,
          DATA_RETURNED,
          DATA_LOADED,
          SELECTED_HOTEL_ID,
          SELECTED_HOTEL_DETAILS,
          SESSION_LOGOUT
         } from '../actions/Var';

const INITIAL_STATE = {
  text: '',
  result: [],
  isLoading: false,
  dataLoad: false,
  id: '',
  data: []
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case CHAT_SCREEN_INPUT:
       return { ...state, text: action.payload };
      case START_LOADING_SKELETON:
       return { ...state, isLoading: true, text: '' };
      case DATA_RETURNED:
        return { ...state, isLoading: false, result: action.payload };
      case DATA_LOADED:
        return { ...state, dataLoad: true };
      case SELECTED_HOTEL_ID:
        return { ...state, id: action.payload };
      case SELECTED_HOTEL_DETAILS:
        return { ...state, id: '', data: action.payload };
      case SESSION_LOGOUT:
        return { ...state, ...INITIAL_STATE };
     default:
      return state;
   }
};
