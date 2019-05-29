import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { GreyButton } from '../../share/button';
import { Checkbox } from 'react-native-material-ui';

export default class CloseAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: '',
            accountName: '',
            BSB: '',
            accountNumber: '',
            agreement: true
        };
    }

    _onSubmit = () => {
        console.log(this.state);
    }

    render() {
        return (
            <View style={styles.box}>
                <Text>By closing your account all valid cashback, coupons and all rewards that you have earned during your participation and are yet to be claimed will become invalid for you to use in the future. Once closed, your account cannot be reactivated. Please refer to our terms and conditions for further information.</Text>
                <View style={{ marginTop: 8, backgroundColor: '#484848', padding: 2 }}>
                    <GreyButton text='Close Now' onPress={this._onSubmit} />
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
