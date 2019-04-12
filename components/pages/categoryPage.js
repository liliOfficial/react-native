import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import AppHeader from '../layout/header';
import CategoryList from '../categories/categoryList';

export default class CategoryPage extends React.Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <AppHeader />
                <View style={styles.layout}>
                    <ScrollView>
                        <CategoryList/>
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
    }
});