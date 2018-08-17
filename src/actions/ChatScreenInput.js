import Dialogflow from 'react-native-dialogflow';
import { CHAT_SCREEN_INPUT,
         START_LOADING_SKELETON,
         DATA_RETURNED,
         DATA_LOADED,
         SELECTED_HOTEL_ID,
         SELECTED_HOTEL_DETAILS,
         SESSION_LOGOUT
      } from './Var';

export const selectedHotelId = (id) => {
  return {
    type: SELECTED_HOTEL_ID,
    payload: id
  };
};

export const selectedHotelDetails = (data) => {
  return {
    type: SELECTED_HOTEL_DETAILS,
    payload: data
  };
};

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

export const sessionLogout = () => {
  return {
    type: SESSION_LOGOUT
  };
};
