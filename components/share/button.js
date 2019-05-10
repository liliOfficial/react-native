import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export const BlackButton = ({ text, onPress }) => {
    return (
        <TouchableHighlight underlayColor="#212121" onPress={onPress}>
            <Text style={styles.blackButton}>{text}</Text>
        </TouchableHighlight>
    )
}

export const PurpleButton = ({ text, onPress }) => {
    return (
        <TouchableHighlight underlayColor="#212121" onPress={onPress}>
            <Text style={styles.purpleButton}>{text}</Text>
        </TouchableHighlight>
    )
}

export const GreyButton = ({ text, onPress }) => {
    return (
        <TouchableHighlight underlayColor="#212121" onPress={onPress}>
            <Text style={styles.greyButton}>{text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    blackButton: {
        backgroundColor: '#212121',
        color: '#fff',
        padding: 7,
        textAlign: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        fontWeight: 'bold'
    },
    purpleButton: {
        backgroundColor: '#7C4DFF',
        color: '#fff',
        padding: 7,
        textAlign: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        fontWeight: 'bold'
    },
    greyButton: {
        backgroundColor: '#484848',
        color: '#fff',
        padding: 7,
        textAlign: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        fontWeight: 'bold'
    }
});