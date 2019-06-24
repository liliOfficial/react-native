import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Spinner = (() => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#7c4dff" />
        </View>
    )
})

export default Spinner;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        right:0,
        bottom:0,
        backgroundColor: 'rgba(0,0,0,0.25)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    }
});