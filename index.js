import { AppRegistry } from 'react-native';
import App from './App';
import LoginPage from './components/pages/loginPage';
import { name as appName } from './app.json';
import React, { Component } from 'react';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

import SplashScreen from 'react-native-splash-screen';

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
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        {this.state.login ? <App/> : <LoginPage login={()=>this.setState({ login: true })} />}
      </ThemeContext.Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Main);
