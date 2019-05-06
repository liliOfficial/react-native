import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class PersonalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={styles.box}>
                <Text> textInComponent </Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    onChangeText={(text) => this.setState({ text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    onChangeText={(text) => this.setState({ text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    onChangeText={(text) => this.setState({ text })}
                />
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
        padding:8,
        marginTop:8
    }
});
