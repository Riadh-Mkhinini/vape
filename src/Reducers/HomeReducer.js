import {
    HOME_START_LOADER,
    HOME_START_REFRESHING,
    HOME_GET_PUBLICATIONS_SUCCESS,
    HOME_FIRST_GET_PUBLICATIONS_SUCCESS,
    ON_SIGN_OUT
} from '../Actions/Types';

const INITIAL_STATE = {
	loading: false,
    refreshing: true,
    publications: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case HOME_START_REFRESHING:
            return { ...state, refreshing: true };
        case HOME_FIRST_GET_PUBLICATIONS_SUCCESS:
            return { ...state, publications: action.payload, refreshing: false };
        case HOME_START_LOADER:
            return { ...state, loading: true };
        case HOME_GET_PUBLICATIONS_SUCCESS:
            return { ...state, publications: [...state.publications, ...action.payload], loading: false };
        case ON_SIGN_OUT:
            return { ...INITIAL_STATE };
        default:
            return state;
	}
};
