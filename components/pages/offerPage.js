import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Banners from '../banner';
import OfferList from '../offers/offerList';
import AppFooter from '../layout/footer';
import AppHeader from '../layout/header';

export default class OfferPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.layout}>
                    <View style={styles.header}>
                        <AppHeader />
                    </View>
                    <ScrollView style={styles.body}>
                        <Banners />
                        <OfferList />
                    </ScrollView>
                    <View style={styles.footer} >
                    <AppFooter />
                </View>
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