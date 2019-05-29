import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlackButton } from '../share/button';



export default class StoreNotificationApproval extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.notificationApproval}>
                <View style={styles.notification}>
                    <Text style={styles.notificationTitle}>NOTIFICATION</Text>
                    <Text style={styles.notificationData}>1 to 7 Days</Text>

                </View>
                <View style={styles.approval}>
                    <Text style={styles.approvalTitle}>ESTIMATED APPROVAL</Text>
                    <Text style={styles.approvalData}>Up to 95 days</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    notificationApproval: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    notification: {
        padding: 5,
        width: '50%',
        alignItems: 'flex-end',
    },
    notificationTitle: {
        fontSize: 12
    },
    notificationData: {
        color: '#7C4DFF',
    },
    approval: {
        padding: 5,
        width: '50%',
        alignItems: 'flex-start'
    },
    approvalTitle: {
        fontSize: 12
    },
    approvalData: {
        color: '#7C4DFF',
    },

});
