import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RewardsCard from './rewardsCard';

export default class RewardsList extends Component {
    state = {
        rewards: [
            {
                "id": '001',
                "date": '19/05/2019',
                "amount": 'AUD 499.99',
                "approveDate": '19/07/2019',
                "status": 'approved',
                "cashback": 'AUD 40.42',
                "imageUrl": { "uri": "https://cdn.cashrewards.com/forever-new.jpg" }
            },
            {
                "id": '002',
                "date": '19/05/2019',
                "amount": 'AUD 499.99',
                "approveDate": '19/07/2019',
                "status": 'approving',
                "cashback": 'AUD 40.42',
                "imageUrl": { "uri": "https://cdn.cashrewards.com/forever-new.jpg" }
            },
            {
                "id": '003',
                "date": '19/05/2019',
                "amount": 'AUD 499.99',
                "approveDate": '19/07/2019',
                "status": 'approving',
                "cashback": 'AUD 40.42',
                "imageUrl": { "uri": "https://cdn.cashrewards.com/forever-new.jpg" }
            },
            {
                "id": '004',
                "date": '19/05/2019',
                "amount": 'AUD 499.99',
                "approveDate": '19/07/2019',
                "status": 'approving',
                "cashback": 'AUD 40.42',
                "imageUrl": { "uri": "https://cdn.cashrewards.com/forever-new.jpg" }
            },
            {
                "id": '005',
                "date": '19/05/2019',
                "amount": 'AUD 499.99',
                "approveDate": '19/07/2019',
                "status": 'approving',
                "cashback": 'AUD 40.42',
                "imageUrl": { "uri": "https://cdn.cashrewards.com/forever-new.jpg" }
            },
            {
                "id": '006',
                "date": '19/05/2019',
                "amount": 'AUD 499.99',
                "approveDate": '19/07/2019',
                "status": 'approving',
                "cashback": 'AUD 40.42',
                "imageUrl": { "uri": "https://cdn.cashrewards.com/forever-new.jpg" }
            },

        ]
    }
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My Rewards </Text>
                <Text style={styles.subTitle}>Purchases, rewards and payments</Text>
                <View>
                    {this.state.rewards.map(item => {
                        return (
                            <RewardsCard reward={item} key={item.id} />
                        )
                    })}

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
