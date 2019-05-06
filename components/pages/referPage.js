import React from 'react';
import { View, StyleSheet, ScrollView, WebView } from 'react-native';
import AppHeader from '../layout/header';

export default class ReferPage extends React.Component {
    render() {
        return (
            <View style={styles.layout}>
                <AppHeader />

                <WebView
                    source={{ uri: 'https://www.cashrewards.com.au/en/refer-a-friend' }}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    }
});