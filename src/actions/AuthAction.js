import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGOUT_USER
        } from './Var';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(user => loginUserSuccess(dispatch, user))
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(user => loginUserSuccess(dispatch, user))
       .catch(() => loginUserFail(dispatch));
     });
  };
};

const loginUserFail = (dispatch) => {
   dispatch({
      type: LOGIN_USER_FAIL
   });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

export const logoutUser = () => {
    return (dispatch) => {
      firebase.auth().signOut()
      .then(dispatch({
         type: LOGOUT_USER
      }))
      .catch(() => console.log('Unable to logout'));
    };
};
