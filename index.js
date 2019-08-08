import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './src/App';

import { name as appName } from './app.json';
import React, { Component } from 'react';
import firebase from 'firebase';

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import SplashScreen from 'react-native-splash-screen';
import reducers from './src/reducers';

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
      loggedIn: false
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDejlOS_bICsz4fztfOW3_C_FJUO89ZnTE',
      authDomain: 'reactnativeproject-5a36e.firebaseapp.com',
      databaseURL: 'https://reactnativeproject-5a36e.firebaseio.com',
      projectId: 'reactnativeproject-5a36e',
      storageBucket: 'reactnativeproject-5a36e.appspot.com',
      messagingSenderId: '68836344446',
      appId: '1:68836344446:web:35c7eab35110d967'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    })
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Provider store={store}>
          {/* {this.state.loggedIn ? <App /> : <LogNav />} */}
          <App/>

        </Provider>
      </ThemeContext.Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Main);
