import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, AppRegistry } from 'react-native';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');
export default class OfferCard extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        const { imageUrl, text, cashBack, link } = this.props.data;
        return (
            <View style={styles.card}>
                <View style={styles.logoBox}>
                    <Image style={styles.logo} source={imageUrl} resizeMethod="resize" />
                </View>
                <Text style={styles.description}>{text}</Text>
                <View style={styles.line}></View>
                <View style={styles.bottomBox}>
                    <Text>{cashBack}</Text>
                    <View style={styles.offerButton}><Text style={{ color: '#fff', fontSize: 12 }}>Shop Offer</Text></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    logoBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        
    },
    logo: {
        width: width * 0.3,
        height: width * 0.15,
        resizeMode: 'contain'
    },
    description: {
        paddingTop: 8,
        paddingBottom: 10,
        fontSize: 11
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
    },
    bottomBox: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    offerButton: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 5,
        backgroundColor: '#841584'
    }
});

AppRegistry.registerComponent('OfferCard', () => OfferCard);