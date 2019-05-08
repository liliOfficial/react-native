import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StoreonlineOfferCard from './storeOnlineOfferCard';

export default class StoreOnlineOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Online Offers</Text>
                <StoreonlineOfferCard/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:20
    },
    title: {
        fontSize: 18,
        color: '#212121',
        fontWeight: 'bold'
    },
});
