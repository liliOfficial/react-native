import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../../actions';

import firebase from 'firebase';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';
import { BlackButton } from '../share/button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from '../share/spinner';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }

    clickLogIn = () => {
        const { email, password } = this.state;
        this.setState({
            error: '',
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(date => {
                this.onLoginSuccess(date);
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false, error: e.message })
            });
    }

    onLoginSuccess = (date) => {
        this.setState({ loading: false });
        console.log(date)
        if (this.props.navigation) return this.props.navigation.goBack();
        // this.props.login();
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        const { error, loading } = this.state;
        return (
            <View style={styles.container}>
                <Image source={require('../../asset/img/logo.png')} style={styles.logo} />
                <View style={styles.card}>
                    <View style={styles.inputGroup}>
                        <Icon name='envelope' size={18} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Icon name='key' size={18} style={styles.icon} />
                        <TextInput
                            secureTextEntry
                            style={styles.input}
                            placeholder='Password'
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>

                    <Text style={styles.error}>{error}</Text>
                    <View style={styles.options}>
                        <TouchableHighlight underlayColor="#eee" onPress={() => this.props.navigation.navigate('JoinNow')}>
                            <Text style={styles.optionText}>New Account</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#eee" onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                            <Text style={styles.optionText}>Forgot Pasword</Text>
                        </TouchableHighlight>
                    </View>
                    <BlackButton text='Sign In' onPress={this.clickLogIn} />
                </View>
                {loading && <Spinner />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7C4DFF'
    },
    logo: {
        width: '70%',
        resizeMode: 'contain',
    },
    card: {
        width: '92%',
        maxWidth: 500,
        padding: 10,
        marginBottom: 100,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    inputGroup: {
        position: 'relative',
        height: 40
    },
    icon: {
        position: 'absolute',
        top: 3,
        color: '#212121',
    },
    input: {
        paddingLeft: 30,
        paddingTop: 5,
        paddingBottom: 3,
    },
    error: {
        color: '#d32f2f',
        paddingBottom: 10,
        textAlign: 'center'
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 8,
    },
    optionText: {
        color: '#484848',
        fontWeight: 'bold',
    }
});

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect(mapStateToProps, { emailChanged })(LoginPage);
