import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import LogoBox from '../share/logoBox';
import StoreTab from '../store/storeTab';

export default class StorePage extends React.Component {

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data');
    return (
      <View style={styles.layout}>
        <View style={styles.banner}>
          <LogoBox imageUrl={data.imageUrl} />
        </View>
        <StoreTab navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  banner: {
    backgroundColor: '#fff'
  }
});
