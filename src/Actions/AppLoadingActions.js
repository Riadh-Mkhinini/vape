import axios from 'axios';
import { URL } from './Config';
import { isSignedIn } from '../Utils';
import {
  SET_USER_IN_REDUCER,
  IS_CONNECTED_APP,
  IS_REFRESH_CONNECTED_APP
} from './Types';

export const setUserInReducer = (user) => {
	return {
		type: SET_USER_IN_REDUCER,
		payload: user
	};
};
export const isConnectedApp = (isConnected) => {
  return { type: IS_CONNECTED_APP, payload: isConnected };
};
export const isRefreshConnexionApp = (refresh) => {
  return { type: IS_REFRESH_CONNECTED_APP, payload: refresh };
};
