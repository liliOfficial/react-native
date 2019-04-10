import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import AppFooter from '../layout/footer';
import FetchLocation from '../fetchLocation';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

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
                    <ScrollView style={styles.body}>
                        <FetchLocation onGetLocation={this.getUserLocationHandler} />
                        <Text style={styles.welcome}>Welcome to React Native111!</Text>
                        <Text style={styles.instructions}>To get started, edit App.js</Text>
                        <Text style={styles.instructions}>{instructions}</Text>
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
