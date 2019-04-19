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
        const imageUrl = {
            "uri": "https://cdn.cashrewards.com/forever-new.jpg"
        }
        return (
            <View style={styles.card}>

                <Image source={imageUrl} style={styles.logo} />
                <View style={styles.content}>
                    <View style={styles.col2}>
                        <View style={{ width: '50%' }}>
                            <Text>Date: </Text>
                            <Text>19/07/2019</Text>
                        </View>
                        <View>
                            <Text>Amount:</Text>
                            <Text>AUD 499.99</Text>
                        </View>
                    </View>
                    <View style={styles.cashback}>
                        <View>
                            <Text style={styles.cashbackNo}>AUD 1.43 </Text>
                        </View>
                        <Icon name="check-circle" size={18} color="#212121" style={styles.status} />
                    </View>
                    <Text style={styles.approvalDate}>Estimated Approval: 19/07/2019</Text>
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
        backgroundColor: '#484848',
        borderRadius: 5,
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    status: {
        color: '#fff'
    },
    cashbackNo: {
        color: '#fff',
        fontSize: 16,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#eee'
    },
    approvalDate: {
        color: '#484848',
        borderTopWidth: 1,

    }

});
