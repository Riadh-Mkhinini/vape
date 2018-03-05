import { NavigationActions } from 'react-navigation';

export const navigateInit = (routeName, callback) => {
  const actionToDispatch = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  });
  callback(actionToDispatch);
};
