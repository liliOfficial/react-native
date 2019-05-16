import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Banners from '../banner';
import OfferList from './offerList';
import AppHeader from '../layout/header';

export default class OfferIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <AppHeader navigation={this.props.navigation}/>
                <View style={styles.layout}>
                    <ScrollView>
                        <Banners />
                        <OfferList navigation={navigation} />
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
