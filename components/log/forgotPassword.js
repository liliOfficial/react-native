import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { WhiteButton } from '../share/button';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Reset Password</Text>
                <Text style={styles.subtitle}>Enter your email address to reset your password. You will receive an email soon if the account exists.</Text>
                <TextInput
                    style={[styles.input, styles.widthP49]}
                    placeholder="Input email address"
                    onChangeText={(firstName) => this.setState({ firstName })}
                />
                <View style={styles.button}>
                    <WhiteButton text='Reset Password' />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#7c4dff',
        padding: 10,
        paddingBottom:150
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    subtitle: {
        color: '#fff',
        paddingBottom: 10,
    },
    input: {
        borderColor: '#FFF',
        borderWidth: 1.5,
        padding: 10,
        marginTop: 8,
        color: '#fff'
    },
    button: {
        marginTop: 10,
        padding: 1,
        backgroundColor: '#fff'
    }
});
