import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, ImageBackground } from 'react-native';
import { Button } from '../Components/common';
import { Width, Divers } from '../Constants';
import { IMAGE_LOGO, IMAGE_FIND, IMAGE_LOCATION, IMAGE_FAVORIS, IMAGE_BACKGROUND } from '../Utils/Images';

class Welcome extends Component {
  handleClickSignIn() {
    this.props.navigation.navigate(Divers.SCREEN_SIGN_IN);
  }
  handleClickSignUp() {
    this.props.navigation.navigate(Divers.SCREEN_SIGN_UP);
  }
  render() {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={IMAGE_BACKGROUND} style={styles.styleImage}>
                <Image source={IMAGE_LOGO} style={styles.styleLogo} />
            </ImageBackground>
            <View style={styles.containerText}>
                <View style={styles.containerRow}>
                    <Image source={IMAGE_FIND} style={styles.styleIcon} />
                    <Text style={styles.styleText}>View <Text style={styles.styleTextBold}>menus, photos,</Text> and <Text style={styles.styleTextBold}>reviews</Text> for restaurants around you.</Text>
                </View>
                <View style={styles.containerRow}>
                    <Image source={IMAGE_LOCATION} style={styles.styleIcon} />
                    <Text style={styles.styleText}>Explore detailed <Text style={styles.styleTextBold}>theme-based lists</Text> of top place in your city.</Text>
                </View>
                <View style={styles.containerRow}>
                    <Image source={IMAGE_FAVORIS} style={styles.styleIcon} />
                    <Text style={styles.styleText}>Add place you want to visit in the future to your <Text style={styles.styleTextBold}>Bookmarks</Text></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.containerButton}>
                    <Button backgroundColorButton={'#FFFFFF'} colorTitle={'#000000'} title={'Sign Up'} onPress={this.handleClickSignUp.bind(this)} width={(Width - 40) / 2} styleContainerButton={{ marginTop: 0, borderRadius: 3, borderColor: '#757575' }} />
                    <Button backgroundColorButton={'#FFFFFF'} colorTitle={'#000000'} title={'Login In'} onPress={this.handleClickSignIn.bind(this)} width={(Width - 40) / 2} styleContainerButton={{ marginTop: 0, borderRadius: 3, borderColor: '#757575' }} />
                </View>
                <Button backgroundColorButton={'#0D47A1'} colorTitle={'#FFFFFF'} title={'Continue with Facebook'} onPress={() => {}} width={Width - 10} styleContainerButton={{ borderRadius: 3 }} />
                <Button backgroundColorButton={'#FFFFFF'} colorTitle={'#000000'} title={'Continue with Google'} onPress={() => {}} width={Width - 10} styleContainerButton={{ marginTop: 0, borderRadius: 3, borderColor: '#757575' }} />
                <Text style={styles.styleTextBottom}>We never post unless you tell us to</Text>
            </View>
        </View>
    );
  }
}
const styles = {
  mainContainer: {
    flex: 1
  },
  styleImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  styleLogo: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginBottom: -40,
    zIndex: 2
  },
  containerText: {
    flex: 1,
    zIndex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    padding: 10
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 8,
    paddingBottom: 8
  },
  styleText: {
    fontSize: 16,
    marginLeft: 20
  },
  styleTextBold: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  styleIcon: {
    width: 30,
    height: 30
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  styleTextBottom: {
    fontSize: 12,
    color: '#9E9E9E',
    textAlign: 'center'
  }
};
const mapStateToProps = ({ appLoading }) => {
	return {
		user: appLoading.user
	};
};
export default connect(mapStateToProps)(Welcome);
