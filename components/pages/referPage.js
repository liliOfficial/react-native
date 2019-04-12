import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import AppHeader from '../layout/header';

export default class ReferPage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <AppHeader />
                <View style={styles.layout}>
                    <ScrollView>
                        <Text>qweqwedfadf</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    },
    footer: {
        justifyContent: 'flex-end',
        paddingBottom: 60,
        backgroundColor: '#fff'
    }
});