import React, { Component } from 'react';
import { View } from 'react-native';

class Card extends Component {
  render() {
    const borderRadius = this.props.raduis ? { borderRadius: 10 } : {};
    return (
      <View style={[styles.container, this.props.styleCard, borderRadius]}>
        {this.props.children}
      </View>
    );
  }
}
const styles = {
  container: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    elevation: 1.5,
    shadowColor: 'rgba(162, 162, 162, 0.50)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#FFFFFF'
  }
};
export { Card };
