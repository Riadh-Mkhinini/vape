import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { StatusBar, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './src/Reducers';
import AppWithNavigationState from './src/Routes/Router';
import { Colors } from './src/Constants';
import { middleware } from './src/Routes/Router';

export const store = createStore(appReducer, {}, applyMiddleware(ReduxThunk, middleware));
export const dispatch = store.dispatch;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={Colors.darkColor}
            barStyle="light-content"
          />
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}
