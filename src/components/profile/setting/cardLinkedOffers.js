import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class CardLinkedOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <View style={styles.box}>
                <Text>Get Cashback when you shop in-store at participating stores with your linked Visa or Mastercard.</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CardList')}>
                    <Text style={styles.button}>Card Setting</Text>
                </TouchableOpacity>
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
    button: {
        paddingTop: 10,
        color: '#7c4dff',
    }
});
