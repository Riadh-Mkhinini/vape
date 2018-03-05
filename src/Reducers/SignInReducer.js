import {
  SIGN_IN_EMAIL_CHANGED,
  SIGN_IN_PASSWORD_CHANGED,
  SIGN_IN_LOGIN_USER_SUCCESS,
  SIGN_IN_START_LOADER,
  SIGN_IN_SET_ERREUR,
  SIGN_IN_INITIAL_STATE,
  ON_SIGN_OUT
} from '../Actions/Types';

const INITIAL_STATE = {
	email: '',
	password: '',
    erreur: '',
	loading: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case SIGN_IN_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case SIGN_IN_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case SIGN_IN_START_LOADER:
            return { ...state, loading: true, erreur: '' };
        case SIGN_IN_LOGIN_USER_SUCCESS:
            return { ...state, loading: false };
        case SIGN_IN_SET_ERREUR:
            return { ...state, erreur: action.payload };
        case SIGN_IN_INITIAL_STATE:
            return { ...INITIAL_STATE };
        case ON_SIGN_OUT:
            return { ...INITIAL_STATE };
        default:
            return state;
	}
};
