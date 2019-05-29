import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginPage from './loginPage';
import JoinNow from './joinNow';
import ForgotPassword from './forgotPassword';

const LogNavigator = createStackNavigator({
  LogIn: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Log In',
      header: null,
      headerStyle: {
        backgroundColor: '#7C4DFF'
      },
      headerTintColor: '#fff',
    }
  },
  JoinNow: {
    screen: JoinNow,
    navigationOptions: {
      title: 'Join Now',
      headerStyle: {
        backgroundColor: '#7C4DFF'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      title: 'Forgot Password',
      headerStyle: {
        backgroundColor: '#7C4DFF'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
}, {
    initialRouteName: 'LogIn'
  })

export default createAppContainer(LogNavigator);