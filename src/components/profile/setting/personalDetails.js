
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker'

import { connect } from 'react-redux';
import { userFetch, userDetailUpdate,userDetailSave } from '../../../actions';

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
        const { firstName, lastName, postCode, mobile, birthday, gender, uid } = this.props;
        this.props.userDetailSave({ firstName, lastName, postCode, mobile, birthday, gender, uid });

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
                <DatePicker
                    style={styles.birthdayPicker}
                    date={birthday}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
                    minDate="01/01/1900"
                    maxDate="31/12/2019"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            right: 5,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            paddingRight: 40,
                            textAlign: 'left',
                            borderColor: '#484848'
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(birthday) => this.detailUpdate({ key: 'birthday', value: birthday })}
                />
                <View style={styles.gender}>
                    <RadioButton
                        label="Male"
                        checked={gender === 'male'}
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
    birthdayPicker: {
        width: '100%',
        marginTop: 5
    },
});

const mapStateToProps = state => {
    console.log(state.user);
    // const user = _.map(state.user, (val, uid) => { return { ...val, uid } });


    const { firstName, lastName, postCode, mobile, birthday, gender, uid } = state.user;
    return { firstName, lastName, postCode, mobile, birthday, gender, uid };
}

export default connect(mapStateToProps, { userFetch, userDetailUpdate,userDetailSave })(PersonalDetails);
