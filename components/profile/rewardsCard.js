import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class RewardsCard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { date, amount, approveDate, status, cashback, imageUrl } = this.props.reward;

        const icon = status === 'approved' ? "check-circle" : "clock";

        return (
            <View style={styles.card}>
                <Image source={imageUrl} style={styles.logo} />
                <View style={styles.content}>
                    <View style={styles.col2}>
                        <View style={{ width: '50%' }}>
                            <Text>Date: </Text>
                            <Text>{date}</Text>
                        </View>
                        <View>
                            <Text>Amount:</Text>
                            <Text>{amount}</Text>
                        </View>
                    </View>
                    <View style={styles.cashback}>
                        <View>
                            <Text style={styles.cashbackNo}>{cashback}</Text>
                        </View>
                        <Icon name={icon} size={16} color="#212121" style={styles.status} />
                    </View>
                    <Text style={styles.approveDate}>Estimated Approval: {approveDate}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    col2: {

        flexDirection: 'row',
        alignItems: 'stretch',
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2
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
        paddingTop: 3,
        paddingRight: 5,
        paddingBottom: 3,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#212121',
        borderRadius: 3,
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    status: {
        color: '#fff',
        marginTop:1
    },
    cashbackNo: {
        color: '#fff',
        fontSize: 15,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#eee'
    },
    approveDate: {
        color: '#484848',
        borderTopWidth: 1,

    }

});
