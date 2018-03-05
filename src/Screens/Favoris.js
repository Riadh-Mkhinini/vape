import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Favoris extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
          <Text>Favoris</Text>
      </View>
    );
  }
}
const styles = {
  mainContainer: {
    flex: 1
  },
};

const mapStateToProps = ({ appLoading }) => {
  return {
    user: appLoading.user,
    isConnected: appLoading.isConnected,
    isRefreshConnexion: appLoading.isRefreshConnexion
  };
};

export default connect(mapStateToProps)(Favoris);
