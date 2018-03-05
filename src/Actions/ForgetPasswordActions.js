import axios from 'axios';
import { URL } from './Config';
import { isExistErreurForgetPassword } from '../Utils';
import {
  FORGET_PASSWORD_EMAIL_CHANGED,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_START_LOADER,
  FORGET_PASSWORD_SET_ERREUR,
  FORGET_PASSWORD_INITIAL_STATE
} from './Types';

export const forgetPasswordEmailChanged = (text) => {
  return { type: FORGET_PASSWORD_EMAIL_CHANGED, payload: text };
};
export const onForgetPassword = (email, callback) => {
  return (dispatch) => {
    const result = isExistErreurForgetPassword(email);
    if (result.isErreur) {
      dispatch({ type: FORGET_PASSWORD_SET_ERREUR, payload: result.message });
    } else {
      dispatch({ type: FORGET_PASSWORD_START_LOADER });
      setTimeout(() => {
        dispatch({ type: FORGET_PASSWORD_SUCCESS });
        callback({ succes: true });
      }, 2000);
    }
  };
};
export const forgetPasswordInitialState = () => {
  return { type: FORGET_PASSWORD_INITIAL_STATE };
};
