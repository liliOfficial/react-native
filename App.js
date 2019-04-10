/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { Route, Redirect, Switch } from 'react-router-dom';
import { Platform, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import InputComponent from './components/input';
import FetchLocation from './components/fetchLocation';
import PickerComponent from './components/picker';
import MyCarousel from './components/my-carousel';
import AppHeader from './components/layout/header';
import AppFooter from './components/layout/footer';
import LinearGradient from 'react-native-linear-gradient';
import OfferPage from './components/pages/offerPage';
import ProfilePage from './components/pages/profilePage';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude.toString();
      const lon = position.coords.longitude.toString();
      Alert.alert(`latitude:${lat}, longitude:${lon}`);
      console.log(position);
      const css1 = "background: #841584; color: #fff; padding:5px 5px";
      const css2 = "font-weight:700; padding:5px 0";
      console.log('%c If you\'re seeing this, CASHREWARDS want to work with you! ' + '%c \nFind us at: https://www.cashrewards.com.au ', css1, css2);
    }, err => {
      console.log(err);
    })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.layout}>
          <View style={styles.header}>
            <AppHeader />
          </View>
          <ScrollView style={styles.body}>
          {/* <Switch>
            <Route path="/offers" component={OfferPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch> */}
            <OfferPage/>
            <FetchLocation onGetLocation={this.getUserLocationHandler} />
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <InputComponent />
            <PickerComponent />
          </ScrollView>
        </View>
        <View style={styles.footer} >
          <AppFooter />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    // height: '100%',
  },
  header: {

  },
  body: {

  },
  footer: {
    justifyContent: 'flex-end',
    paddingBottom: 60,
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
