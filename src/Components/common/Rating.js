import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Rating extends Component {
  renderMiddleRating(position) {
     const { note } = this.props;
     if (position === 5) {
         if ((note > position - 1) && note < position) {
             return (
                 <View style={styles.containerHalfRating}>
                     <View style={[styles.styleHalfRating, { backgroundColor: '#4CAF50' }]} />
                     <View style={styles.styleLastHalfRating} />
                 </View>
             );
         } else if (note < position) {
             return <View style={styles.styleLastRating} />;
         }
         return <View style={[styles.styleLastRating, { backgroundColor: '#4CAF50' }]} />;
     } else if ((note > position - 1) && note < position) {
         return (
             <View style={styles.containerHalfRating}>
                 <View style={[styles.styleHalfRating, { backgroundColor: '#4CAF50' }]} />
                 <View style={styles.styleHalfRating} />
             </View>
         );
     } else if (note < position) {
         return <View style={styles.styleRating} />;
     }
     return <View style={[styles.styleRating, { backgroundColor: '#4CAF50' }]} />;
  }
  render() {
      const { note } = this.props;
      const firstRating = note >= 1 ? [styles.styleFirstRating, { backgroundColor: '#4CAF50' }] : styles.styleFirstRating;
    return (
      <View style={styles.mainContainer}>
          <View style={firstRating} />
          {this.renderMiddleRating(2)}
          {this.renderMiddleRating(3)}
          {this.renderMiddleRating(4)}
          {this.renderMiddleRating(5)}
          <Text style={styles.styleText}>{note}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  styleFirstRating: {
      width: 20,
      height: 14,
      backgroundColor: '#E0E0E0',
      borderBottomLeftRadius: 7,
      borderTopLeftRadius: 7,
      marginRight: 2
  },
  styleLastRating: {
      width: 20,
      height: 14,
      backgroundColor: '#E0E0E0',
      borderBottomEndRadius: 7,
      borderTopEndRadius: 7,
      marginRight: 5
  },
  styleRating: {
      width: 20,
      height: 14,
      backgroundColor: '#E0E0E0',
      marginRight: 2
  },
  containerHalfRating: {
      marginRight: 2,
      flexDirection: 'row',
      width: 20,
      height: 14,
  },
  styleHalfRating: {
      width: 10,
      height: 14,
      backgroundColor: '#E0E0E0',
  },
  styleLastHalfRating: {
      width: 10,
      height: 14,
      backgroundColor: '#E0E0E0',
      borderBottomEndRadius: 7,
      borderTopEndRadius: 7,
      marginRight: 5
  },
  styleText: {
      color: '#4CAF50',
      fontSize: 12
  }
});
export { Rating };
