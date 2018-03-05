import { StackNavigator } from 'react-navigation';

import AppLoading from '../Screens/AppLoading';
import Welcome from '../Screens/Welcome';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ForgetPassword from '../Screens/ForgetPassword';
import Comments from '../Screens/Comments';

import { tabNavigator } from './TabNavigator';
import { Colors } from '../Constants';
//******** app configuration navigation *********/
export const AppNavigator = StackNavigator(
    {
      AppLoading: {
        screen: AppLoading,
        navigationOptions: () => ({
          gesturesEnabled: false,
          header: null
        })
      },
      SignUp: {
        screen: SignUp,
        navigationOptions: () => ({
          title: 'Sign Up',
          gesturesEnabled: false,
          headerBackTitle: null,
          headerTintColor: '#FFFFFF',
          headerStyle: { backgroundColor: Colors.primaryColor },
        })
      },
      SignIn: {
        screen: SignIn,
        navigationOptions: () => ({
          title: 'Sign Up',
          gesturesEnabled: false,
          headerBackTitle: null,
          headerTintColor: '#FFFFFF',
          headerStyle: { backgroundColor: Colors.primaryColor },
        })
      },
      ForgetPassword: {
        screen: ForgetPassword,
        navigationOptions: () => ({
          title: 'Forget Password',
          gesturesEnabled: false,
          headerBackTitle: null,
          headerTintColor: '#FFFFFF',
          headerStyle: { backgroundColor: Colors.primaryColor },
        })
      },
      Welcome: {
        screen: Welcome,
        navigationOptions: () => ({
          gesturesEnabled: false,
          header: null
        })
      },
      Comments: {
          screen: Comments,
          navigationOptions: () => ({
            gesturesEnabled: false,
            headerBackTitle: null,
            headerTintColor: '#FFFFFF',
            headerStyle: { backgroundColor: Colors.primaryColor },
          })
      },
      MainApp: { screen: tabNavigator }
    },
    {
      initialRouteName: 'AppLoading',
    }
);
