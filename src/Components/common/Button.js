import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Button extends Component {
  render() {
    const { onPress, title, disabled, styleContainerButton, backgroundColorButton, colorTitle, styleTitle, radius, width, borderColor } = this.props;
    return (
      <TouchableOpacity disabled={disabled === undefined ? false : disabled} onPress={onPress}>
        <View style={[styles.container, styleContainerButton, { backgroundColor: backgroundColorButton, borderColor }, radius && styles.styleRadius, { width }]}>
          <Text style={[styles.titleButton, styleTitle, { color: colorTitle }]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10
  },
  titleButton: {
    fontSize: 16
  },
  styleRadius: {
    borderRadius: 20,
    borderWidth: 1
  }
};

export { Button };
