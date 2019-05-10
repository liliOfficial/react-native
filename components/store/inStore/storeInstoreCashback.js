import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PurpleButton, GreyButton } from '../../share/button';
import StoreNotificationApproval from '../storeNotificationApproval';

import Collapsible from 'react-native-collapsible';

export default class StoreInstoreCashback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conditionShow: true
        };
    }

    toggleConditions = () => {
        const conditionShow = this.state.conditionShow;
        this.setState({ conditionShow: !conditionShow });
    }

    render() {

        return (
            <View style={styles.card}>
                <Text style={styles.cashback}>UP TO 10.00% CASHBACK</Text>
                <View style={{ width: '100%' }}>
                    <PurpleButton text='Link Your Card' />
                </View>
                <View style={styles.how}>
                    <Icon name='help' size={16} style={styles.howIcon} />
                    <Text style={styles.howText}>How do in-store offers work?</Text>
                </View>
                <Collapsible collapsed={this.state.conditionShow}>
                    <View style={styles.conditionContent}>
                        <StoreNotificationApproval />
                        <View style={{ paddingBottom: 5 }}>
                            <GreyButton text='Special Terms' />
                        </View>
                        <GreyButton text='CashbackTips' />
                    </View>
                </Collapsible>

                <TouchableHighlight underlayColor='transparent' onPress={this.toggleConditions}>
                    <View style={styles.conditionButton}>
                        <Text style={styles.conditionText}>Cashback</Text>
                        <Text style={styles.conditionText}>Conditions</Text>
                        {this.state.conditionShow && <Icon name='add' size={18} style={styles.conditionIcon} />}
                        {!this.state.conditionShow && <Icon name='clear' size={18} style={styles.conditionIcon} />}
                        
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        alignItems: 'center',
    },
    cashback: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#7C4DFF'
    },
    how: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 8
    },
    howIcon: {
        marginRight: 3,
        color: '#484848',
    },
    howText: {
        color: '#484848'
    },

    conditionContent: {
        width: '100%',
        marginTop: 15,
        paddingTop: 10,
        paddingBottom: 15,
        borderColor: '#484848',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },

    conditionButton: {
        backgroundColor: '#7C4DFF',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 35,
        marginTop: -25,
        paddingTop:5
    },
    conditionText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    },
    conditionIcon: {
        color:'#fff'
    }
});
