import React from 'react';
import { View, Text,ScrollView, StyleSheet } from 'react-native';

import LogoBox from '../share/logoBox';
import StoreTab from '../store/storeTab';

export default class StorePage extends React.Component {

  render() {
    const { navigation } = this.props;
    const { imageUrl, text, cashBack, link } = navigation.getParam('data');
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <View style={styles.layout}>
          <ScrollView>
            <View style={styles.banner}>
              <LogoBox imageUrl={imageUrl} />
            </View>
            <StoreTab/>
          </ScrollView>
        </View>
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
    backgroundColor:'#fff'
  }
});
