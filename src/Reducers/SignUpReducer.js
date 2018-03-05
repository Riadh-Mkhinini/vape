import {
    SIGN_UP_TEXT_CHANGED,
    SIGN_UP_SET_ERREUR,
    SIGN_UP_START_LOADER,
    SIGN_UP_SUCCESS,
    SIGN_UP_INITIAL_STATE,
    ON_SIGN_OUT
} from '../Actions/Types';

const INITIAL_STATE = {
    email: '',
    userName: '',
    password: '',
    erreur: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case SIGN_UP_TEXT_CHANGED:
          return { ...state, [action.props]: action.payload };
        case SIGN_UP_SET_ERREUR:
          return { ...state, erreur: action.payload };
        case SIGN_UP_START_LOADER:
          return { ...state, loading: true, erreur: '' };
        case SIGN_UP_SUCCESS:
          return { ...state, loading: false };
        case SIGN_UP_INITIAL_STATE:
          return { ...INITIAL_STATE };
        case ON_SIGN_OUT:
          return { ...INITIAL_STATE };
        default:
          return state;
	}
};
