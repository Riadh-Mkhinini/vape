import React, { Component } from 'react';
import { FlatList, RefreshControl, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Publication } from '../Components/Publication';
import { Colors } from '../Constants';
import { getPuplications } from '../Actions';

class Home extends Component {
  componentDidMount() {
    this.onRefresh();
  }
  onRefresh() {
    this.props.getPuplications(this.props.user.id, 1);
  }
  renderFooter() {
    const { loading, refreshing, publications } = this.props;
    if (loading && !refreshing && publications.length > 0) {
      return (
        <View style={{ paddingVertical: 20 }}>
          <ActivityIndicator animating size='large' />
        </View>
      );
    }
    return null;
  }
  renderItem({ item }) {
      return <Publication item={item} onPressComment={() => this.props.navigation.navigate('Comments')} />;
  }
  render() {
    /*if (!this.props.isConnected) {
        return <ErreurConnexion />;
    }*/
    return (
        <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
          data={this.props.publications}
          keyExtractor={item => item.id}
          renderItem={this.renderItem.bind(this)}
          ListFooterComponent={this.renderFooter.bind(this)}
          refreshControl={
            <RefreshControl
              colors={[Colors.primaryColor, Colors.darkColor]}
              refreshing={this.props.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        />
    );
  }
}
const styles = {
  mainContainer: {
    flex: 1
  },
};

const mapStateToProps = ({ appLoading, home }) => {
  return {
    user: appLoading.user,
    isConnected: appLoading.isConnected,
    isRefreshConnexion: appLoading.isRefreshConnexion,
    publications: home.publications,
    loading: home.loading,
    refreshing: home.refreshing
  };
};

export default connect(mapStateToProps, { getPuplications })(Home);
