import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, { Component } from 'react';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

const uiTheme = {
    palette: {
      primaryColor: COLOR.deepPurpleA200,
    },
    toolbar: {
      container: {
        height: 50,
      },
    },
  };
  
  class Main extends Component {
    render() {
      return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <App />
        </ThemeContext.Provider>
      );
    }
  }

AppRegistry.registerComponent(appName, () => Main);
