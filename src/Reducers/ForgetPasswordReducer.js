import {
    FORGET_PASSWORD_EMAIL_CHANGED,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_START_LOADER,
    FORGET_PASSWORD_SET_ERREUR,
    FORGET_PASSWORD_INITIAL_STATE,
    ON_SIGN_OUT
} from '../Actions/Types';

const INITIAL_STATE = {
	email: '',
    erreur: '',
	loading: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case FORGET_PASSWORD_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case FORGET_PASSWORD_START_LOADER:
            return { ...state, loading: true, erreur: '' };
        case FORGET_PASSWORD_SUCCESS:
            return { ...state, loading: false };
        case FORGET_PASSWORD_SET_ERREUR:
            return { ...state, erreur: action.payload };
        case FORGET_PASSWORD_INITIAL_STATE:
            return { ...INITIAL_STATE };
        case ON_SIGN_OUT:
            return { ...INITIAL_STATE };
        default:
            return state;
	}
};
