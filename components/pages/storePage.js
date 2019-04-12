import React from 'react';
import { View, Text,ScrollView, StyleSheet } from 'react-native';

import AppFooter from '../layout/footer';
import AppHeader from '../layout/header';
import LogoBox from '../share/logoBox';

export default class StorePage extends React.Component {

  render() {
    const { navigation } = this.props;
    const { imageUrl, text, cashBack, link } = navigation.getParam('data');
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <AppHeader />
        <View style={styles.layout}>
          <ScrollView>
            <View>
              <LogoBox imageUrl={imageUrl} />
            </View>
            <Text> textInComponent {text} </Text>
          </ScrollView>
          <View style={styles.footer} >
            <AppFooter navigation={navigation} />
          </View>
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
  footer: {
      justifyContent: 'flex-end',
      paddingBottom: 60,
      backgroundColor: '#fff'
  }
});
