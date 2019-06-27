import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ConfirmPopup = (() => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>

                <LinearGradient colors={['#7ecb20', '#e7ff8c']} style={styles.linearGradient}>
                    <Text style={styles.message}>Successfully saved!</Text>
                    <View>
                        <Icon name="check" size={50} color="#fff" style={styles.status} />
                    </View>
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
        backgroundColor:'#fff'
    },
    linearGradient: {
        padding: 15,
        borderRadius: 5,
        textAlign: 'center',
        width: '100%'
    },
    message: {
        fontSize:20,
        textAlign:'center',
        paddingTop:30,
        paddingBottom: 30,
    }
});
