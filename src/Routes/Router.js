import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import { AppNavigator } from './AppNavigator';

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class AppWithNavigationState extends Component {
  render() {
    return <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav, addListener })} />;
  }
}
const mapStateToProps = ({ nav }) => ({
  nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
