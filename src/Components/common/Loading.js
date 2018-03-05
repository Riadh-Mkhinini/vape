import React, { Component } from 'react';
import { View, Modal, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Width } from '../../Constants';

class Loading extends Component {
  render() {
    return (
      <Modal
        transparent
        animationType={'none'}
        visible={this.props.isVisible}
        onRequestClose={() => {}}
      >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#757575" />
          <Text style={styles.styleText}>Loading...</Text>
        </View>
      </View>
    </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    height: 80,
    width: Width - 40,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  styleText: {
    fontSize: 18,
    color: '#000000',
    marginLeft: 20
  }
});
export { Loading };
