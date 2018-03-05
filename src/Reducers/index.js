import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import AppLoadingReducer from './AppLoadingReducer';
import SignInReducer from './SignInReducer';
import SignUpReducer from './SignUpReducer';
import ForgetPasswordReducer from './ForgetPasswordReducer';
import HomeReducer from './HomeReducer';

export default combineReducers({
	nav: NavigationReducer,
	signIn: SignInReducer,
	signUp: SignUpReducer,
	appLoading: AppLoadingReducer,
	forgetPassword: ForgetPasswordReducer,
	home: HomeReducer
});
