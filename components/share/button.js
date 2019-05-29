import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export const BlackButton = ({ text, onPress }) => {
    return (
        <TouchableHighlight underlayColor="#212121" onPress={onPress}>
            <Text style={[styles.button, styles.blackButton]}>{text}</Text>
        </TouchableHighlight>
    )
}

export const PurpleButton = ({ text, onPress }) => {
    return (
        <TouchableHighlight underlayColor="#212121" onPress={onPress}>
            <Text style={[styles.button, styles.purpleButton]}>{text}</Text>
        </TouchableHighlight>
    )
}

export const GreyButton = ({ text, onPress }) => {
    return (
        <TouchableHighlight underlayColor="#212121" onPress={onPress}>
            <Text style={[styles.button, styles.greyButton]}>{text}</Text>
        </TouchableHighlight>
    )
}

export const WhiteButton = ({ text, onPress }) => {
    return (
        <TouchableHighlight underlayColor="#212121" onPress={onPress}>
            <Text style={[styles.button, styles.whiteButton]}>{text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        color: '#fff',
        padding: 7,
        textAlign: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        fontWeight: 'bold'
    },
    blackButton: {
        backgroundColor: '#212121',

    },
    purpleButton: {
        backgroundColor: '#7C4DFF',

    },
    greyButton: {
        backgroundColor: '#484848',

    },
    whiteButton: {
        backgroundColor: '#fff',
        color: '#7C4DFF'
    }
});