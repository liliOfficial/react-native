import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userInfoUpdate, userCreate } from '../../actions';

import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Checkbox } from 'react-native-material-ui';
import { BlackButton } from '../share/button';
import Spinner from '../share/spinner';

class JoinNow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    clickJoin = () => {
        console.log('create');
        const { firstName, lastName, email, password, postCode, navigation } = this.props;
        this.props.userCreate({ firstName, lastName, email, password, postCode, navigation });
        // this.props.navigation.navigate('authPages');
    }

    infoUpdate(text) {
        this.props.userInfoUpdate(text);
    }

    render() {
        const { firstName, lastName, email, password, postCode, agreement, loading, error } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ padding: 10 }}>
                    <Text style={styles.title}>Join CASHREWARDS</Text>
                    <Text style={styles.subtitle}>Join hundreds of thousands of Aussies who have earned over $50 million through CASHREWARDS</Text>
                    <View style={styles.card}>
                        <View style={styles.col2}>
                            <TextInput
                                style={[styles.input, styles.widthP49]}
                                placeholder="First Name"
                                value={firstName}
                                onChangeText={(firstName) => this.infoUpdate({ key: 'firstName', value: firstName })}
                            />
                            <TextInput
                                style={[styles.input, styles.widthP49]}
                                placeholder="Last Name"
                                value={lastName}
                                onChangeText={(lastName) => this.infoUpdate({ key: 'lastName', value: lastName })}
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={(email) => this.infoUpdate({ key: 'email', value: email })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={(password) => this.infoUpdate({ key: 'password', value: password })}
                        />
                        <View style={styles.col2}>
                            <TextInput
                                style={[styles.input, styles.widthP49]}
                                placeholder="Post Code"
                                value={postCode}
                                onChangeText={(postCode) => this.infoUpdate({ key: 'postCode', value: postCode })}
                            />
                            <TextInput
                                style={[styles.input, styles.widthP49]}
                                placeholder="Promo Code (Optional)"
                                onChangeText={(promoCode) => this.setState({ promoCode })}
                            />
                        </View>
                        <View style={styles.checkbox}>
                            <Checkbox
                                label="I have read, understood and agree to the Privacy Policy and Terms of Use."
                                value='true'
                                checked={agreement}
                                onCheck={agreement => this.infoUpdate({ key: 'agreement', value: agreement })}
                            />
                        </View>
                        <Text style={styles.error}>{error}</Text>                      
                        <BlackButton text='Join Now' onPress={this.clickJoin} />
                    </View>
                </View>
                {loading && <Spinner />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#7c4dff'
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
    },
    error: {
        color: '#d32f2f',
        paddingBottom: 10,
        textAlign: 'center'
    },
});

const mapStateToProps = state => {
    console.log(state);
    const { firstName, lastName, email, password, postCode, agreement, error, loading } = state.join;
    return { firstName, lastName, email, password, postCode, agreement, error, loading };
}

export default connect(mapStateToProps, { userInfoUpdate, userCreate })(JoinNow);
