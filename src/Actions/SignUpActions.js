import axios from 'axios';
import { URL } from './Config';
import { isExistErreurSignUp } from '../Utils';
import {
  SIGN_UP_TEXT_CHANGED,
  SIGN_UP_SET_ERREUR,
  SIGN_UP_START_LOADER,
  SIGN_UP_INITIAL_STATE,
  SIGN_UP_SUCCESS
} from './Types';

export const signUpTextChanged = (props, text) => {
	return { type: SIGN_UP_TEXT_CHANGED, props, payload: text };
};
export const onSignUp = (userName, password, email, callback) => {
  return (dispatch) => {
    const result = isExistErreurSignUp(userName, password, email);
    if (result.isErreur) {
      dispatch({ type: SIGN_UP_SET_ERREUR, payload: result.message });
    } else {
      dispatch({ type: SIGN_UP_START_LOADER });
      setTimeout(() => {
        dispatch({ type: SIGN_UP_SUCCESS });
        callback({ id: '18DEJHJ55099', firstName: 'Riadh', lastName: 'Mkhinini' });
      }, 2000);
    }
  };
};
export const signUpInitialState = () => {
  return { type: SIGN_UP_INITIAL_STATE };
};
