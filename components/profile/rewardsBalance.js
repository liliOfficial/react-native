import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlackButton } from '../share/button';

export default class RewardsBalance extends Component {

    render() {
        return (
            <View style={styles.card}>
                <Text>Rewards Balance</Text>
                <Text style={styles.number}>$159.54</Text>
                <Text>Available Rewards:$158.11</Text>
                <View style={styles.button}>
                    <BlackButton text='Get Paid' />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    number: {
        fontSize:36,
        fontWeight:'bold',
        color:'#7c4dff',
        padding:8
    },
    button: {
        width: '100%',
        marginTop:8
    }
});
