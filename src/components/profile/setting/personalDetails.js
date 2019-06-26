
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, DatePickerIOS } from 'react-native';

import { connect } from 'react-redux';
import { userFetch, userDetailUpdate } from '../../../actions';

import { GreyButton } from '../../share/button';
import { RadioButton } from 'react-native-material-ui';

class PersonalDetails extends Component {
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

    componentWillMount() {
        this.props.userFetch();
    }

    componentWillReceiveProps() {

    }

    _onSubmit = () => {
        console.log(this.props);
    }

    setDate = (newDate) => {
        this.setState({ chosenDate: newDate });
    }

    detailUpdate(text) {
        this.props.userDetailUpdate(text);
    }

    render() {
        const { firstName, lastName, postCode, mobile, birthday, gender } = this.props;
        return (
            <View style={styles.box}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    onChangeText={(firstName) => this.detailUpdate({ key: 'firstName', value: firstName })}
                    value={firstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    onChangeText={(lastName) => this.detailUpdate({ key: 'lastName', value: lastName })}
                    value={lastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    onChangeText={(mobile) => this.detailUpdate({ key: 'mobile', value: mobile })}
                    value={mobile}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Post Code"
                    onChangeText={(postCode) => this.detailUpdate({ key: 'postCode', value: postCode })}
                    value={postCode}
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
                        checked={gender !== 'female'}
                        value="male"
                        onSelect={gender => this.detailUpdate({ key: 'gender', value: gender })}
                    />
                    <RadioButton
                        label="Female"
                        checked={gender === 'female'}
                        value="female"
                        onSelect={gender => this.detailUpdate({ key: 'gender', value: gender })}
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

const mapStateToProps = state => {
    console.log(state.user);
    // const user = _.map(state.user, (val, uid) => { return { ...val, uid } });


    const { firstName, lastName, postCode, mobile, birthday, gender } = state.user;
    return { firstName, lastName, postCode, mobile, birthday, gender };
}

export default connect(mapStateToProps, { userFetch, userDetailUpdate })(PersonalDetails);
