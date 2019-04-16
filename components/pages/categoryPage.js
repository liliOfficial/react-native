import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CategoryCard from '../categories/categoryCard';

export default class CategoryPage extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#6b52ae'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.title}>Attractions and Experiences</Text>
                <View>
                    <CategoryCard/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6b52ae'
    },
    title: {
        padding: 10,
        fontSize: 18,
        color: '#6b52ae',
        fontWeight: 'bold',
    }
});


