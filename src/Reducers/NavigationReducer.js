import { AppNavigator } from '../Routes/AppNavigator';
import {
	ON_SIGN_OUT
} from '../Actions/Types';

const INITIAL_STATE = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('AppLoading'));


export default (state = INITIAL_STATE, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);
	switch (action.type) {
		default:
			return nextState || state;
	}
};
