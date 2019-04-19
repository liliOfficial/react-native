import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RewardsCard from './rewardsCard';

export default class RewardsList extends Component {
    state= {
        rewards: [
            {
                "date":'19/05/2019',
                "amount":'AUD 499.99',
                "approveDate":'19/07/2019',
                "status":'approved',
                "cashback":'AUD 40.42'
            }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My Rewards </Text>
                <Text style={styles.subTitle}>Purchases, rewards and payments</Text>
                <View>
                    <RewardsCard />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 18,
        color: '#212121',
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#484848'
    }
});
