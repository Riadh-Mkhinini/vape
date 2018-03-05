import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground } from 'react-native';

import { isSignedIn, navigateInit, Connection } from '../Utils';
import { setUserInReducer, isConnectedApp, isRefreshConnexionApp } from '../Actions';
import { Divers } from '../Constants';
import { IMAGE_BACKGROUND } from '../Utils/Images';

class AppLoading extends Component {
  componentWillMount() {
    isSignedIn().then(res => {
      if (res.isLoggedIn) {
        this.props.setUserInReducer(res.user);
        navigateInit(Divers.SCREEN_MAIN_APP, (actionToDispatch) => this.props.navigation.dispatch(actionToDispatch));
      } else {
        navigateInit(Divers.SCREEN_WELCOME, (actionToDispatch) => this.props.navigation.dispatch(actionToDispatch));
      }
    }).catch(() => {});
  }
  handleConnection(isConnected) {
    this.props.isConnectedApp(isConnected);
    if (!isConnected) {
      this.props.isRefreshConnexionApp(false);
    }
  }
  render() {
    return (
      <ImageBackground source={IMAGE_BACKGROUND} style={{ flex: 1 }}>
        <Connection isConnectedApp={this.handleConnection.bind(this)} />
      </ImageBackground>
    );
  }
}

export default connect(null, { setUserInReducer, isConnectedApp, isRefreshConnexionApp })(AppLoading);
