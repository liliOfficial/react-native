import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { GreyButton } from '../../share/button';

export default class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        };
    }

    _onSubmit = () => {
        console.log(this.state);
    }

    render() {
        return (
            <View style={styles.box}>
                <Text>Passwords need to be at least 8 characters long.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Current Password"
                    onChangeText={(currentPassword) => this.setState({ currentPassword })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="New Password Address"
                    onChangeText={(newPassword) => this.setState({ newPassword })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm New Password Address"
                    onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                />
                <View style={{ marginTop: 8, backgroundColor: '#484848', padding: 2 }}>
                    <GreyButton text='Update' onPress={this._onSubmit} />
                </View>
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
    input: {
        borderColor: '#484848',
        borderWidth: 1,
        padding: 8,
        marginTop: 8
    }
});
