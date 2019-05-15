import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { GreyButton } from '../../share/button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNPickerSelect from 'react-native-picker-select';

const countries = [
    {
        label: 'United States of America(+1)',
        value: '+1',
    },
    {
        label: 'Canada (+1)',
        value: '+1',
    },
    {
        label: 'Russia (+7)',
        value: '+7',
    },
    {
        label: 'Kazakhstan (+7)',
        value: '+7',
    },
    {
        label: 'Egypt (+20)',
        value: '+20',
    },
    {
        label: 'South Africa (+27)',
        value: '+27',
    },
];
export default class TwoFactorAuthentication extends Component {

    constructor(props) {
        super(props);
        this.inputRefs = {
            firstTextInput: null,
            state: null,
            favSport1: null,
        };
        this.state = {
            country: '',
            mobile: '',
            currentPassword: '',

        };

    }

    _onSubmit = () => {
        console.log(this.state);
    }

    render() {
        const placeholder = {
            label: 'Select a country...',
            value: null,
            color: '#9EA0A4',
        };
        return (
            <View style={styles.box}>
                <View>
                    <Text>2FA provides an extra level of security to your account.</Text>
                </View>
                <RNPickerSelect
                    placeholder={placeholder}
                    items={countries}
                    onValueChange={value => {
                        this.setState({
                            country: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.firstTextInput.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.favSport1.togglePicker();
                    }}
                    value={this.state.country}
                    ref={el => {
                        this.inputRefs.firstTextInput = el;
                    }}
                    Icon={() => {
                        return <Icon name="sort-down" size={12} color='#212121' />;
                    }}
                    style={styles.input}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    onChangeText={(mobile) => this.setState({ mobile })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Current Password"
                    onChangeText={(currentPassword) => this.setState({ currentPassword })}
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
