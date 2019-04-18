import React from 'react';
import { View, ScrollView, Text, StyleSheet, Platform, TouchableHighlight, Alert } from 'react-native';

import AppHeader from '../layout/header';
import RewardsBalance from '../profile/rewardsBalance';
import RewardsList from '../profile/rewardsList';
import { BlackButton } from '../share/button';

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
            const css1 = "background: #7C4DFF; color: #fff; padding:5px 5px";
            const css2 = "font-weight:700; padding:5px 0";
            console.log('%c If you\'re seeing this, CASHREWARDS want to work with you! ' + '%c \nFind us at: https://www.cashrewards.com.au ', css1, css2);
        }, err => {
            console.log(err);
        })
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.layout}>
                <AppHeader />
                <ScrollView style={styles.body}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Welcome Back, Li</Text>
                        <View style={styles.buttonGroup}>
                            <View style={styles.titleButton}>
                                <BlackButton text='Settings' onPress={this._onPressButton} />
                            </View>
                            <View style={styles.titleButton}>
                                <BlackButton text='Click History' />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: -76 }}>
                        <RewardsBalance />
                    </View>
                    <View>
                        <RewardsList />
                    </View>

                    <FetchLocation onGetLocation={this.getUserLocationHandler} />
                    <Text style={styles.welcome}>Welcome to React Native111!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    titleBox: {
        backgroundColor: '#7C4DFF',
        color: '#7C4DFF',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 80
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    titleButton: {
        width: '49%',
    },
    blackButton: {
        backgroundColor: '#212121',
        color: '#fff',
        padding: 7,
        textAlign: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        fontWeight: 'bold'
    }



    ,
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
