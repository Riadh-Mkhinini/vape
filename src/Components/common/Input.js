import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import { View, TextInput, Platform } from 'react-native';

class Input extends Component {
  renderIcon() {
    const { iconName, colorIcon, language } = this.props;
    if (this.props.iconName !== undefined) {
      return (
        <View style={[styles.containerIcon, { marginLeft: language === 'AR' ? 0 : 10, marginRight: language === 'AR' ? 10 : 0 }]}>
          <Icon name={iconName} size={30} color={colorIcon} />
        </View>
      );
    }
  }
  render() {
    const { onChangeText, value, keyboardType, maxLength, placeholder, placeholderTextColor, styleTextInput, width, secureTextEntry, language, styleContainer } = this.props;
    const flexDirection = language === 'AR' ? 'row-reverse' : 'row';
    return (
        <View style={[styles.container, { flexDirection }, styleContainer]}>
          {this.renderIcon()}
          <View style={[styles.containerTextInput, { width }]}>
            <TextInput
              style={[styles.styleInput, styleTextInput]}
              onChangeText={onChangeText}
              value={value}
              autoCorrect={false}
              keyboardType={keyboardType}
              maxLength={maxLength}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              underlineColorAndroid={'transparent'}
              autoCapitalize='none'
              secureTextEntry={secureTextEntry}
            />
          </View>
        </View>
    );
  }
}
const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    marginTop: 5,
    marginBottom: 5
  },
  containerIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  containerTextInput: {
    justifyContent: 'center',
    width: 200,
    height: Platform.OS === 'android' ? 45 : 40
  },
  styleInput: {
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
  }
};

export { Input };
