import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RewardsCard from './rewardsCard';

export default class RewardsList extends Component {
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
