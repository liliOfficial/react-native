import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import SearchInput from '../search/searchInput';

class AppHeader extends Component {

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#841584' }}>
                <View style={styles.container}>
                    <Text style={styles.logo}>CASHREWARDS</Text>
                </View>
                <SearchInput />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40
    },
    logo: {
        color: '#fff',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default AppHeader;