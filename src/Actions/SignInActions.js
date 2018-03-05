import axios from 'axios';
import { URL } from './Config';
import { isExistErreurSignIn } from '../Utils';
import {
  SIGN_IN_EMAIL_CHANGED,
  SIGN_IN_PASSWORD_CHANGED,
  SIGN_IN_LOGIN_USER_SUCCESS,
  SIGN_IN_START_LOADER,
  SIGN_IN_SET_ERREUR,
  SIGN_IN_INITIAL_STATE
} from './Types';

export const signInEmailChanged = (text) => {
	return { type: SIGN_IN_EMAIL_CHANGED, payload: text };
};
export const signInPasswordChanged = (text) => {
	return { type: SIGN_IN_PASSWORD_CHANGED, payload: text };
};
export const onSignIn = (email, password, callback) => {
  return (dispatch) => {
    const result = isExistErreurSignIn(email, password);
    if (result.isErreur) {
      dispatch({ type: SIGN_IN_SET_ERREUR, payload: result.message });
    } else {
      dispatch({ type: SIGN_IN_START_LOADER });
      setTimeout(() => {
        dispatch({ type: SIGN_IN_LOGIN_USER_SUCCESS });
        callback({ id: '18DEJHJ55099', firstName: 'Riadh', lastName: 'Mkhinini' });
      }, 2000);
    }
  };
};
export const signInInitialState = () => {
  return { type: SIGN_IN_INITIAL_STATE };
};
