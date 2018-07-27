import { CHAT_SCREEN_INPUT,
          START_LOADING_SKELETON,
          DATA_RETURNED,
          DATA_LOADED
         } from '../actions/Var';

const INITIAL_STATE = {
  text: '',
  result: [],
  isLoading: false,
  dataLoad: false
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
     default:
      return state;
   }
};
