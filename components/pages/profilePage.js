import React from 'react';
import { View, ScrollView, Text, StyleSheet, Platform } from 'react-native';

import AppHeader from '../layout/header';
import FetchLocation from '../fetchLocation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

export default class ProfilePage extends React.Component {

    getUserLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude.toString();
            const lon = position.coords.longitude.toString();
            Alert.alert(`latitude:${lat}, longitude:${lon}`);
            console.log(position);
            const css1 = "background: #6b52ae; color: #fff; padding:5px 5px";
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
                        <FetchLocation onGetLocation={this.getUserLocationHandler} />
                        <Text style={styles.welcome}>Welcome to React Native111!</Text>
                        <Text style={styles.instructions}>To get started, edit App.js</Text>
                        <Text style={styles.instructions}>{instructions}</Text>
                    </ScrollView>
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
