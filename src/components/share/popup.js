import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const SuccessPopup = (({message, onPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <LinearGradient colors={['#7ecb20', '#e7ff8c']} style={styles.linearGradient}>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableHighlight underlayColor="#212121" onPress={onPress}>
                        <View style={styles.button}>
                            <Icon name="check" size={40} color="#fff" style={styles.status} />
                        </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>
        </View>
    )
})

export const FailPopup = (({message, onPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <LinearGradient colors={['#dd2c00', '#ffd180']} style={styles.linearGradient}>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
                        <View style={styles.button}>
                            <Icon name="times" size={40} color="#fff" style={styles.status} />
                        </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>
        </View>
    )
})


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.25)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    },
    card: {
        width: '92%',
        maxWidth: 500,
        marginBottom: 100,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: '#fff'
    },
    linearGradient: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%'
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        color: '#fff'
    },
    button: {
        backgroundColor: '#212121',
        color: '#fff',
        height: 80,
        width: 80,
        margin:'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        overflow: 'hidden',
        fontWeight: 'bold',
    }
});
