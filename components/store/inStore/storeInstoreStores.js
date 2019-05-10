import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class StoreinstoreStores extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Participating Stores</Text>
                <View style={styles.card}>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    },
    title: {
        fontSize: 18,
        color: '#212121',
        fontWeight: 'bold'
    },
    card:{
        backgroundColor: '#fff',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        zIndex: 5,
        padding:10
    }
});
