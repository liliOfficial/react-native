import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class ClickHistoryCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            store:'Coles Online',
            date:'Mon, Apr 15, 2019 03:20 PM'
        };
    }

    render() {
        const {store, date} = this.props.history;
        return (
            <View style={styles.card}>
                <View style={{ width: '68%' }}>
                    <Text style={styles.store}>{store}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View>
                    <TouchableHighlight underlayColor="#212121" style={styles.revisit}>
                        <Icon name='redo' size={20} style={styles.icon} />
                    </TouchableHighlight>
                    <Text style={styles.buttonText}>Revisit</Text>
                </View>
                <View>
                    <TouchableHighlight underlayColor="#212121" style={styles.enquiry}>
                        <Icon name='envelope-open-text' size={20} style={styles.icon} />
                    </TouchableHighlight>
                    <Text style={styles.buttonText}>Enquiry</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    store: {
        fontSize: 18,
        paddingTop: 7,
        paddingBottom: 5,
        color: '#212121',
        fontWeight: 'bold',
    },
    date: {
        color:'#484848'
    },
    revisit: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        marginRight: 5,
        backgroundColor: '#7C4DFF',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    enquiry: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        backgroundColor: '#212121',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    icon: {
        color: '#fff'
    },
    buttonText: {
        paddingTop: 3,
        color: '#484848',
        fontSize: 10,
        textAlign: 'center'
    }

});
