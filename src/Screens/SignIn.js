import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { navigateInit, setInStorage, isDisabledSignIn } from '../Utils';
import { signInEmailChanged, signInPasswordChanged, onSignIn, signInInitialState } from '../Actions';
import { Button, Input, Loading } from '../Components/common';
import { Width, Divers } from '../Constants';

class SignIn extends Component {
  componentWillUnmount() {
     this.props.signInInitialState();
  }
  onEmailChange(text) {
     this.props.signInEmailChanged(text);
  }
  onPasswordChange(text) {
     this.props.signInPasswordChanged(text);
  }
  onPressSignIn() {
    const { email, password } = this.props;
    this.props.onSignIn(email, password, (user) => {
      setInStorage(user, Divers.KEY_USER).then(() => {
        navigateInit(Divers.SCREEN_APP_LOADING, (actionToDispatch) => this.props.navigation.dispatch(actionToDispatch));
      });
    });
  }
  onNavigateForgetPassword() {
    this.props.navigation.navigate(Divers.SCREEN_FORGET_PASSWORD);
  }
  render() {
    const { erreur, email, password, loading } = this.props;
    const disabled = isDisabledSignIn(email, password);
    const backgroundColor = disabled ? '#9E9E9E' : '#00C853';
    return (
      <View style={styles.mainContainer}>
        <Button backgroundColorButton={'#0D47A1'} colorTitle={'#FFFFFF'} title={'Continue with Facebook'} onPress={() => {}} width={Width - 20} styleContainerButton={{ borderRadius: 3 }} />
        <Button backgroundColorButton={'#FFFFFF'} colorTitle={'#000000'} title={'Continue with Google'} onPress={() => {}} width={Width - 20} styleContainerButton={{ marginTop: 0, borderRadius: 3, borderColor: '#757575' }} />
        <View style={styles.container}>
          <Text style={[styles.styleText, { marginBottom: 10, marginTop: 20 }]}>OR LOGIN USING YOUR BON PLAT ACCOUNT</Text>
          <Input value={email} width={Width - 20} styleTextInput={{ fontSize: 14 }} styleContainer={styles.styleInput} placeholder={'Email'} placeholderTextColor={'#616161'} onChangeText={this.onEmailChange.bind(this)} />
          <Input value={password} width={Width - 20} secureTextEntry styleTextInput={{ fontSize: 14 }} styleContainer={styles.styleInput} placeholder={'Password'} placeholderTextColor={'#616161'} onChangeText={this.onPasswordChange.bind(this)} />
          <Text style={styles.styleTextErreur}>{erreur}</Text>
          <Button onPress={this.onPressSignIn.bind(this)} backgroundColorButton={backgroundColor} colorTitle={'#FFFFFF'} title={'Log in'} width={Width - 20} styleContainerButton={{ marginTop: 20, borderRadius: 3, borderColor: '#757575' }} />
          <TouchableOpacity style={styles.containerText} onPress={this.onNavigateForgetPassword.bind(this)}>
            <Text style={styles.styleText}>Forget password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBottom}>
          <Text style={styles.styleTextBottom}>By login in you agree to Bon Plat <Text style={styles.styleTextSou}>Termes of service</Text>, <Text style={styles.styleTextSou}>Privacy Policy</Text> and <Text style={styles.styleTextSou}>Content Policies</Text>.</Text>
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
const mapStateToProps = ({ signIn }) => {
	return {
        email: signIn.email,
        password: signIn.password,
        loading: signIn.loading,
        erreur: signIn.erreur
	};
};
export default connect(mapStateToProps, { signInEmailChanged, signInPasswordChanged, onSignIn, signInInitialState })(SignIn);
