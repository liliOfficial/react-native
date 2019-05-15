import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CardLinkedOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.box}>
                <Text>Introducing Visa card linked offers, the newest way for CASHREWARDS members to earn Cashback. Now you can start earning Cashback when you shop in-store and online at participating stores when you use your linked Visa card.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#484848',
        borderTopColor: '#fff',
        borderWidth: 1,
    },
});
