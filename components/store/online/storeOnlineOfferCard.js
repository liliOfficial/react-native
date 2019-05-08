import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class StoreonlineOfferCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.card}>
                <Text> textInComponent </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        alignItems: 'center',
    }
});
