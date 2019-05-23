import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { BlackButton } from '../share/button';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Image source={require('../../asset/img/logo.png')} style={styles.logo} />
                <View style={styles.card}>
                    <View style={styles.inputGroup}>
                        <Icon name='envelope' size={18} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={(text) => this.setState({ text })}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Icon name='key' size={18} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({ text })}
                        />
                    </View>
                    <BlackButton text='Log In' onPress={this.props.login}/>
                </View>

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
        width: '75%',
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
        position:'relative',
        height:40
    },
    icon: {
        position: 'absolute',
        color:'#212121',
    },
    input: {
        paddingLeft:30,
        paddingTop:3
    }
});
