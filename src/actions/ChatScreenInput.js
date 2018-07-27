import Dialogflow from 'react-native-dialogflow';
import { CHAT_SCREEN_INPUT,
         START_LOADING_SKELETON,
         DATA_RETURNED,
         DATA_LOADED
      } from './Var';

export const chatScreenInput = (text) => {
  return {
    type: CHAT_SCREEN_INPUT,
    payload: text
  };
};

export const startFetchingData = ({ text }) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_SKELETON });
    Dialogflow.requestQuery(text,
    result => {
      console.log('r', result);
      dispatch({
        type: DATA_RETURNED,
        payload: result
      });
      dispatch({
        type: DATA_LOADED
      });
    },
    error => console.log(error)

  );
  };
};

export const dataLoaded = () => {
  return {
    type: DATA_LOADED
  };
};
