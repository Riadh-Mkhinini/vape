import {
    SET_USER_IN_REDUCER,
    IS_CONNECTED_APP,
    IS_REFRESH_CONNECTED_APP,
    ON_SIGN_OUT
} from '../Actions/Types';

const INITIAL_STATE = {
    user: null,
    isConnected: true,
    isRefreshConnexion: true,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case SET_USER_IN_REDUCER:
          return { ...state, user: action.payload };
        case IS_CONNECTED_APP:
          return { ...state, isConnected: action.payload };
        case IS_REFRESH_CONNECTED_APP:
          return { ...state, isRefreshConnexion: action.payload };
        case ON_SIGN_OUT:
          return { ...state, user: null, isConnected: true, isRefreshConnexion: true };
        default:
          return state;
	}
};
