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

export default class App extends Component {
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
      <OfferPage />
    );
  }
}
