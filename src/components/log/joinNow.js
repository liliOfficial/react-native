import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Checkbox } from 'react-native-material-ui';
import { BlackButton } from '../share/button';

import firebase from 'firebase';

export default class JoinNow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    clickJoin = () => {
        console.log('create');
        const { email, password } = this.state;
        if (email && password) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    console.log(user);
                }).catch(e => {
                    console.log(e);
                });
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Join CASHREWARDS</Text>
                <Text style={styles.subtitle}>Join hundreds of thousands of Aussies who have earned over $50 million through CASHREWARDS</Text>
                <View style={styles.card}>
                    <View style={styles.col2}>
                        <TextInput
                            style={[styles.input, styles.widthP49]}
                            placeholder="First Name"
                            onChangeText={(firstName) => this.setState({ firstName })}
                        />
                        <TextInput
                            style={[styles.input, styles.widthP49]}
                            placeholder="Last Name"
                            onChangeText={(lastName) => this.setState({ lastName })}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <View style={styles.col2}>
                        <TextInput
                            style={[styles.input, styles.widthP49]}
                            placeholder="Post Code"
                            onChangeText={(postCode) => this.setState({ postCode })}
                        />
                        <TextInput
                            style={[styles.input, styles.widthP49]}
                            placeholder="Promo Code (Optional)"
                            onChangeText={(postCode) => this.setState({ postCode })}
                        />
                    </View>
                    <View style={styles.checkbox}>
                        <Checkbox
                            label="I have read, understood and agree to the Privacy Policy and Terms of Use."
                            value='true'
                            checked={this.state.agreement}
                            onCheck={agreement => this.setState({ agreement })}
                        />
                    </View>
                    <BlackButton text='Join Now' onPress={this.clickJoin} />
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
        padding: 10
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
    card: {
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginBottom: 100
    },
    col2: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    widthP49: {
        width: '49%',
    },
    input: {
        borderColor: '#484848',
        borderWidth: 1.5,
        padding: 8,
        marginTop: 8
    },
    checkbox: {
        height: 60
    }
});
