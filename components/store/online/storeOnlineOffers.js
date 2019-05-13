import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StoreonlineOfferCard from './storeOnlineOfferCard';

export default class StoreOnlineOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offers: [
                {
                    id: '1',
                    description: `Mother's Day 20% off Breville Waffle and Pancake Maker's`,
                    expires: '13/05/19',
                    coupon: 'qwerasdf',
                    terms: 'A minimum spend of $100 in a single transaction is required to be eligible for Cashback.'
                },
                {
                    id: '2',
                    description: `20% Off Select Essential Oils (excluding sweet peony & english rose)`,
                    expires: '13/05/19',
                    coupon: '',
                    terms: 'A minimum spend of $100 in a single transaction is required to be eligible for Cashback.'
                },
                {
                    id: '3',
                    description: `20% Off Select Essential Oils (excluding sweet peony & english rose)`,
                    expires: '13/05/19',
                    coupon: '',
                    terms: ''
                },
                {
                    id: '4',
                    description: `20% Off Select Essential Oils (excluding sweet peony & english rose)`,
                    expires: '13/05/19',
                    coupon: 'aaaaaaaa',
                    terms: ''
                }
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Online Offers</Text>
                {this.state.offers.map(item => {
                    return <StoreonlineOfferCard data={item} key={item.id} navigation={this.props.navigation} />
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    title: {
        fontSize: 18,
        color: '#212121',
        fontWeight: 'bold'
    },
});
