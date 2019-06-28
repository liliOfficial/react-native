import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const SuccessPopup = (({ message = 'Click to Continue!', onPress, color = '#009624' }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>
                    <Text style={[styles.title, { color: color }]}>Success</Text>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableHighlight underlayColor="#212121" onPress={onPress} style={[styles.button, { backgroundColor: color, }]}>
                        <Text style={{ color: '#fff' }}>OK</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
})

export const FailPopup = (({ message = 'Something Went Wrong!', onPress, color = '#b71c1c' }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>
                    <Text style={[styles.title, { color: color }]}>Sorry</Text>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableHighlight underlayColor="#212121" onPress={onPress} style={[styles.button, { backgroundColor: color, }]}>
                        <Text style={{ color: '#fff' }}>OK</Text>
                    </TouchableHighlight>
                </View>
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
        backgroundColor: 'rgba(0,0,0,0.3)',
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
    content: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        paddingTop: 20,
        fontSize: 28,
        fontWeight: '600'
    },
    message: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 15,
        color: '#212121'
    },

    button: {
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 45,
        paddingRight: 45,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10
    }
});
