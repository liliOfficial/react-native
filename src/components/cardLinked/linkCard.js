import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-material-ui';
import { PurpleButton } from '../share/button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import VGSCollect from './vgs';

export default class LinkCardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            agreement: false
        };
    }

    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.title}>Link your Card</Text>
                <Text style={styles.subTitle}>Link one or more Visa credit or debit cards and activate available card-linked Cashback offers to your card. </Text>
                <VGSCollect/>
                <View style={{ position: 'relative' }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Input Card Number"
                        onChangeText={(cardNumber) => this.setState({ cardNumber })}
                    />
                    <TouchableOpacity style={styles.camera}>
                        <Icon name='camera' size={20} color='#484848' />
                    </TouchableOpacity>

                </View>
                <View style={styles.agreement}>
                    <View style={styles.checkbox}>
                        <Checkbox
                            label="By clicking ‘Opt-in’ I agree to the Terms and Privacy Policy, and that CASHREWARDS may share my Visa card number linked to my Cashrewards account with Visa so that Visa can review my transactions and tell Cashrewards about my qualifying purchases and provide rewards."
                            value='true'
                            checked={this.state.agreement}
                            style={{ backgroundColor: 'red' }}
                            onCheck={agreement => this.setState({ agreement })}
                        />
                    </View>
                </View>

                <PurpleButton text='Link Card'></PurpleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize: 18,
        color: '#212121',
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#484848',
        paddingBottom: 10,
    },
    checkbox: {
        height: 150
    },
    input: {
        borderColor: '#484848',
        borderWidth: 2,
        padding: 8,
        marginTop: 8
    },
    camera: {
        position: 'absolute',
        right: 8,
        top: 15,
    }

});
