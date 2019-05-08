import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';

import { PurpleButton } from '../../share/button';

export default class PersonalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

            firstName: '',
            lastName: '',
            mobile: '',
            postCode: '',
            birthday: ''

        };
    }

    _onSubmit = () => {
        console.log(this.state);
    }

    render() {

        console.log(this.state);
        return (
            <View style={styles.box}>
                <Text> textInComponent </Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    onChangeText={(firstName) => this.setState({ firstName })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    onChangeText={(lastName) => this.setState({ lastName })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    onChangeText={(mobile) => this.setState({ mobile })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Post Code"
                    onChangeText={(postCode) => this.setState({ postCode })}
                />
                <View style={{ marginTop: 8, backgroundColor: '#7C4DFF', padding:2 }}>
                    <PurpleButton text='Update' onPress={this._onSubmit} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#212121',
        borderTopColor: '#fff',
        borderWidth: 1,
    },
    input: {
        borderColor: '#212121',
        borderWidth: 1,
        padding: 8,
        marginTop: 8
    }
});
