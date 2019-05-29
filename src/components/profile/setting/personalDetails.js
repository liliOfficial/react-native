import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, DatePickerIOS } from 'react-native';

import { GreyButton } from '../../share/button';
import { RadioButton } from 'react-native-material-ui';

export default class PersonalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            mobile: '',
            postCode: '',
            birthday: '',
            gender: 'male',
            chosenDate: new Date()
        };
    }

    _onSubmit = () => {
        console.log(this.state);
    }

    setDate = (newDate) => {
        this.setState({ chosenDate: newDate });
    }

    render() {
        return (
            <View style={styles.box}>
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
                <Text style={{ paddingTop: 10 }}>Date of birth</Text>
                <View style={styles.birthday}>

                    <TextInput
                        style={styles.birthdayDay}
                        placeholder="DD"
                        onChangeText={(postCode) => this.setState({ postCode })}
                    />
                    <TextInput
                        style={styles.birthdayMonth}
                        placeholder="MM"
                        onChangeText={(postCode) => this.setState({ postCode })}
                    />
                    <TextInput
                        style={styles.birthdayYear}
                        placeholder="YYYY"
                        onChangeText={(postCode) => this.setState({ postCode })}
                    />
                </View>
                <View style={styles.gender}>
                    <RadioButton
                        label="Male"
                        checked={this.state.gender === 'male'}
                        value="male"
                        onSelect={gender => this.setState({ gender })}
                    />
                    <RadioButton
                        label="Female"
                        checked={this.state.gender === 'female'}
                        value="female"
                        onSelect={gender => this.setState({ gender })}
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
    },
    gender: {
        flexDirection: 'row'
    },
    birthday: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    birthdayDay: {
        borderColor: '#484848',
        borderWidth: 1,
        padding: 8,
        marginTop: 8,
        width: '20%'
    },
    birthdayMonth: {
        borderColor: '#484848',
        borderWidth: 1,
        padding: 8,
        marginTop: 8,
        width: '20%'
    },
    birthdayYear: {
        borderColor: '#484848',
        borderWidth: 1,
        padding: 8,
        marginTop: 8,
        width: '56%'
    }
});
