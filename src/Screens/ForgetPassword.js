import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { forgetPasswordEmailChanged, onForgetPassword, forgetPasswordInitialState } from '../Actions';
import { Button, Input, Loading } from '../Components/common';
import { Width } from '../Constants';

class ForgetPassword extends Component {
  componentWillUnmount() {
      this.props.forgetPasswordInitialState();
  }
  onEmailChange(text) {
      this.props.forgetPasswordEmailChanged(text);
  }
  onPressSubmit() {
      const { email } = this.props;
      this.props.onForgetPassword(email, () => {

      });
  }
  render() {
    const { erreur, email, loading } = this.props;
    const disabled = email === '';
    const backgroundColor = disabled ? '#9E9E9E' : '#00C853';
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Input onChangeText={this.onEmailChange.bind(this)} value={email} width={Width - 20} styleTextInput={{ fontSize: 14 }} styleContainer={styles.styleInput} placeholder={'Email'} placeholderTextColor={'#616161'} />
          <Text style={styles.styleTextErreur}>{erreur}</Text>
          <Button onPress={this.onPressSubmit.bind(this)} backgroundColorButton={backgroundColor} colorTitle={'#FFFFFF'} title={'Submit'} width={Width - 20} styleContainerButton={{ marginTop: 20, borderRadius: 3, borderColor: '#757575' }} />
        </View>
        <Loading isVisible={loading} />
      </View>
    );
  }
}
const styles = {
  mainContainer: {
    flex: 1,
    padding: 10
  },
  container: {
    paddingTop: 10
  },
  styleInput: {
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderBottomWidth: 0.5,
    borderBottomColor: '#616161'
  },
  styleTextErreur: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10
  }
};
const mapStateToProps = ({ forgetPassword }) => {
	return {
        email: forgetPassword.email,
        loading: forgetPassword.loading,
        erreur: forgetPassword.erreur
	};
};
export default connect(mapStateToProps, { forgetPasswordEmailChanged, onForgetPassword, forgetPasswordInitialState })(ForgetPassword);
