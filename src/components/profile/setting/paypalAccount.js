import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { GreyButton } from '../../share/button';
import { Checkbox } from 'react-native-material-ui';

export default class PaypalAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: '',
            accountName: '',
            BSB: '',
            accountNumber: '',
            agreement: false
        };
    }

    _onSubmit = () => {
        console.log(this.state);
    }

    render() {
        return (
            <View style={styles.box}>
                <Text>Quick, simple and safe - direct deposit to your PayPal account is a convenient way to receive your payments.</Text>
                <Text>Ensure your bank account details are current and entered correctly.</Text>

                <View style={{ height: 50 }}>
                    <Checkbox
                        label="Accept security terms"
                        value='true'
                        checked={this.state.agreement}
                        style={{ backgroundColor: 'red' }}
                        onCheck={agreement => this.setState({ agreement })}
                    />
                </View>
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
