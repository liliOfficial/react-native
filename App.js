/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import OfferPage from './components/pages/offerPage';
import ProfilePage from './components/pages/profilePage';
import StorePage from './components/pages/storePage';
import CategoryPage from './components/pages/categoryPage';

const styles = StyleSheet.create({
  icon: {
    width: 20, height: 20, marginTop: 15, marginBottom: 5
  }
});

const AppNavigator = createBottomTabNavigator({
  Offers: {
    screen: OfferPage,
    navigationOptions: {
      tabBarIcon: <Image source={require('./asset/img/icon/offers.png')} style={styles.icon} />
    }
  },
  Categories: {
    screen: CategoryPage,
    navigationOptions: {
      tabBarIcon: <Image source={require('./asset/img/icon/categories.png')} style={styles.icon} />
    }
  },
  'Refer a Friend': {
    screen: StorePage,
    navigationOptions: {
      tabBarIcon: <Image source={require('./asset/img/icon/friend.png')} style={styles.icon} />
    }
  },
  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      tabBarIcon: <Image source={require('./asset/img/icon/user.png')} style={styles.icon} />
    }
  },
  Store: {
    screen: StorePage,
    navigationOptions: {
      tabBarIcon: <Image source={require('./asset/img/icon/offers.png')} style={styles.icon} />,
      tabBarVisible: false
    }
  },


},
  {
    initialRouteName: "Offers",

    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#858585",
      labelStyle: {
        fontSize: 10,
        lineHeight: 20,
      }
    }
  }
);

export default createAppContainer(AppNavigator);
