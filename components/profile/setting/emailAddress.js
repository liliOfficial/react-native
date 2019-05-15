import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { GreyButton } from '../../share/button';

export default class EmailAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentEmail: 'li.li@cashrewards.com',
            currentPassword: '',
            newEmail: '',
            confirmEmail: ''
        };
    }

    _onSubmit = () => {
        console.log(this.state);
    }

    render() {
        return (
            <View style={styles.box}>
                <Text>Current email: {this.state.currentEmail}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Current Password"
                    onChangeText={(currentPassword) => this.setState({ currentPassword })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="New Email Address"
                    onChangeText={(newEmail) => this.setState({ newEmail })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm New Email Address"
                    onChangeText={(confirmEmail) => this.setState({ confirmEmail })}
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
