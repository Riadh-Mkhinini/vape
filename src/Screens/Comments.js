import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Comments extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
          <Text>Comments</Text>
      </View>
    );
  }
}
const styles = {
  mainContainer: {
  },
};

const mapStateToProps = ({ appLoading }) => {
  return {
    user: appLoading.user,
    isConnected: appLoading.isConnected,
    isRefreshConnexion: appLoading.isRefreshConnexion
  };
};

export default connect(mapStateToProps)(Comments);
