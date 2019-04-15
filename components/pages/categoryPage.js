import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import AppHeader from '../layout/header';
import CategoryList from '../categories/categoryList';

export default class CategoryPage extends React.Component {

    render() {

        return (

            <CategoryList />

        );
    }
}

