import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Loading } from '../Components/common';
import { Width, Divers } from '../Constants';
import { signUpTextChanged, onSignUp, signUpInitialState } from '../Actions';
import { navigateInit, setInStorage, isDisabledSignUp } from '../Utils';

class SignUp extends Component {
  componentWillUnmount() {
    this.props.signUpInitialState();
  }
  onUserNameChange(text) {
    this.props.signUpTextChanged('userName', text);
  }
  onEmailChange(text) {
    this.props.signUpTextChanged('email', text);
  }
  onPasswordChange(text) {
    this.props.signUpTextChanged('password', text);
  }
  onPressNavigateSignIn() {
    this.props.navigation.navigate(Divers.SCREEN_SIGN_IN);
  }
  onPressSignUp() {
    const { userName, password, email } = this.props;
    this.props.onSignUp(userName, password, email, (user) => {
        setInStorage(user, Divers.KEY_USER).then(() => {
          navigateInit(Divers.SCREEN_APP_LOADING, (actionToDispatch) => this.props.navigation.dispatch(actionToDispatch));
        });
    });
  }
  render() {
    const { userName, password, email, erreur, loading } = this.props;
    const disabled = isDisabledSignUp(userName, password, email);
    const backgroundColor = disabled ? '#9E9E9E' : '#00C853';
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'android' ? null : 'padding'} style={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          <Button backgroundColorButton={'#0D47A1'} colorTitle={'#FFFFFF'} title={'Continue with Facebook'} onPress={() => {}} width={Width - 20} styleContainerButton={{ borderRadius: 3 }} />
          <Button backgroundColorButton={'#FFFFFF'} colorTitle={'#000000'} title={'Continue with Google'} onPress={() => {}} width={Width - 20} styleContainerButton={{ marginTop: 0, borderRadius: 3, borderColor: '#757575' }} />
          <View style={styles.container}>
            <Text style={[styles.styleText, { marginBottom: 10, marginTop: 20 }]}>OR SIGN UP USING EMAIL</Text>
            <Input onChangeText={this.onUserNameChange.bind(this)} value={userName} width={Width - 20} styleTextInput={{ fontSize: 14 }} styleContainer={styles.styleInput} placeholder={'Name'} placeholderTextColor={'#616161'} />
            <Input onChangeText={this.onEmailChange.bind(this)} value={email} width={Width - 20} styleTextInput={{ fontSize: 14 }} styleContainer={styles.styleInput} placeholder={'Email'} placeholderTextColor={'#616161'} />
            <Input onChangeText={this.onPasswordChange.bind(this)} value={password} secureTextEntry width={Width - 20} styleTextInput={{ fontSize: 14 }} styleContainer={styles.styleInput} placeholder={'Password'} placeholderTextColor={'#616161'} />
            <Text style={styles.styleTextErreur}>{erreur}</Text>
            <Button onPress={this.onPressSignUp.bind(this)} disabled={disabled} backgroundColorButton={backgroundColor} colorTitle={'#FFFFFF'} title={'Sign up'} width={Width - 20} styleContainerButton={{ marginTop: 20, borderRadius: 3, borderColor: '#757575' }} />
            <TouchableOpacity style={styles.containerText} onPress={this.onPressNavigateSignIn.bind(this)}>
              <Text style={styles.styleText}>Already a member ? Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBottom}>
            <Text style={styles.styleTextBottom}>By creating an account, you agree to Bon Plat <Text style={styles.styleTextSou}>Termes of service</Text>, <Text style={styles.styleTextSou}>Privacy Policy</Text> and <Text style={styles.styleTextSou}>Content Policies</Text>.</Text>
          </View>
          <Loading isVisible={loading} />
        </View>
      </KeyboardAvoidingView>
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
  styleText: {
    fontSize: 14,
    color: '#616161'
  },
  styleInput: {
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderBottomWidth: 0.5,
    borderBottomColor: '#616161'
  },
  containerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  containerText: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  styleTextBottom: {
    fontSize: 10,
    color: '#616161',
    textAlign: 'center'
  },
  styleTextSou: {
    textDecorationLine: 'underline'
  },
  styleTextErreur: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10
  }
};
const mapStateToProps = ({ signUp }) => {
	return {
    email: signUp.email,
    userName: signUp.userName,
    password: signUp.password,
    erreur: signUp.erreur,
    loading: signUp.loading
	};
};
export default connect(mapStateToProps, { signUpTextChanged, onSignUp, signUpInitialState })(SignUp);
