import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Rating } from './common';
import { IMAGE_LOGO } from '../Utils/Images';
import { Width } from '../Constants';

class Publication extends Component {
  renderBody() {
      const { description, pictures } = this.props.item;
      if (pictures.length > 0) {
          return (
              <View style={styles.containerBody}>
                  <Text ellipsizeMode={'tail'} numberOfLines={2}>{description}</Text>
                  <View style={styles.containerImage}>
                      <Image source={{ uri: pictures[0] }} style={styles.styleImagePublication} />
                      <View style={styles.containerApp}>
                          <Text style={styles.styleTextNumberImage}>{`1/${pictures.length} pictures`}</Text>
                          <Image source={IMAGE_LOGO} style={styles.styleLogo} />
                      </View>
                  </View>
              </View>
          );
      }
      return (
          <View style={styles.containerBody}>
              <Text ellipsizeMode={'tail'} numberOfLines={6}>{description}</Text>
          </View>
      );
  }
  render() {
    const { location, note, dateCreation, likes, comments, user } = this.props.item;
    const { onPressComment } = this.props;
    return (
      <View style={styles.mainContainer}>
          <View style={styles.containerUser}>
              <Image source={{ uri: user.picture }} style={styles.styleAvatar} />
              <View style={styles.containerNameUser}>
                  <Text>{`${user.firstName} ${user.lastName}`}</Text>
                  <Text style={styles.styleText}>{location}</Text>
              </View>
              <TouchableOpacity>
                  <View style={styles.containerIcon}>
                      <Icon name={'ios-bookmark-outline'} size={36} color={'#757575'} />
                  </View>
              </TouchableOpacity>
          </View>
          <View style={styles.containerRatingDate}>
              <Rating note={note} />
              <Text style={styles.styleText}>{dateCreation}</Text>
          </View>
          {this.renderBody()}
          <View style={styles.containerTextLikeComment}>
              <Text style={styles.styleTextLike}>{`${likes} Like`}</Text>
              <Text style={styles.styleTextLike}>{`${comments} Comments`}</Text>
          </View>
          <View style={styles.containerButtons}>
              <TouchableOpacity style={{ flex: 1 }}>
                  <View style={styles.styleButton}>
                      <Icon name={'ios-heart-outline'} size={20} color={'#757575'} />
                      <Text style={styles.styleTextButton}>Like</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1 }} onPress={onPressComment}>
                  <View style={styles.styleMiddleButton}>
                      <Icon name={'ios-chatbubbles-outline'} size={20} color={'#757575'} />
                      <Text style={styles.styleTextButton}>Comment</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1 }}>
                  <View style={styles.styleButton}>
                      <Icon name={'ios-git-branch-outline'} size={20} color={'#757575'} />
                      <Text style={styles.styleTextButton}>Share</Text>
                  </View>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = {
  mainContainer: {
      backgroundColor: '#FFFFFF',
      marginTop: 5,
      marginBottom: 5
  },
  containerUser: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.8,
      borderBottomColor: '#EEEEEE',
      margin: 5,
      padding: 5
  },
  styleAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25
  },
  containerNameUser: {
      flex: 4,
      marginLeft: 10,
      alignItems: 'flex-start'
  },
  styleText: {
      fontSize: 14,
      color: 'grey'
  },
  containerIcon: {
      padding: 10,
      alignSelf: 'flex-end'
  },
  containerRatingDate: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
      padding: 5
  },
  containerBody: {
      margin: 5,
      padding: 5
  },
  containerImage: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
      marginTop: 10,
  },
  containerApp: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      height: 50,
      width: Width,
      backgroundColor: 'rgba(0,0,0,0.4)',
  },
  styleTextNumberImage: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.7)'
  },
  styleLogo: {
      width: 30,
      height: 30,
      borderRadius: 15
  },
  styleImagePublication: {
      height: 260,
      width: Width,
  },
  containerTextLikeComment: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      marginLeft: 5
  },
  styleTextLike: {
      fontSize: 12,
      color: 'grey',
      marginRight: 10
  },
  containerButtons: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: '#EEEEEE'
  },
  styleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
  },
  styleMiddleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      borderRightWidth: 1,
      borderRightColor: '#EEEEEE',
      borderLeftWidth: 1,
      borderLeftColor: '#EEEEEE'
  },
  styleTextButton: {
      fontSize: 16,
      color: 'grey',
      marginLeft: 10
  }
};
export { Publication };
