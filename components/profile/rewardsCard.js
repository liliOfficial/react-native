import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class RewardsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const imageUrl = {
            "uri": "https://cdn.cashrewards.com/forever-new.jpg"
        }
        return (
            <View style={styles.card}>
                <Image source={imageUrl} style={styles.logo} />
                <View style={styles.content}>
                    <Text>Date</Text>
                    <Text>Amount</Text>
                    <Text>Estimated Approval Date: 19/07/2019</Text>
                    <View style={styles.cashback}>
                        <Text style={styles.cashbackTitle}>Cashback: </Text>
                        <Text style={styles.cashbackNo}>AUD 1.43</Text>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        alignItems: 'stretch',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    content: {
        paddingLeft: 10
    },
    cashback: {
        flex: 1,
        flexDirection: 'row',
        paddingTop:5
    },
    cashbackTitle: {
        marginTop:1,
        marginRight:5
    },
    cashbackNo: {
        color: '#7c4dff',
        fontSize: 15
    }

});
