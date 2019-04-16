import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import AppHeader from '../layout/header';

export default class ReferPage extends React.Component {
    render() {
        return (
            <View style={styles.layout}>
                <ScrollView>
                    <Text>qweqwedfadf</Text>
                </ScrollView>
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