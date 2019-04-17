import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import LogoBox from '../share/logoBox';

export default class OfferCard extends Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        const { imageUrl, text, cashBack, link } = this.props.data;
        return (

            <TouchableHighlight onPress={() => this.props.navigation.navigate('Store', { data: this.props.data })} underlayColor="white">
                <View style={styles.card}>
                    <LogoBox imageUrl={imageUrl} />
                    <Text style={styles.description}>{text}</Text>
                    <View style={styles.line}></View>
                    <View style={styles.bottomBox}>
                        <Text style={styles.cashBack}>{cashBack}</Text>
                        {/* <View style={styles.offerButton}><Text style={{ color: '#fff', fontSize: 12 }}>Shop Offer</Text></View> */}
                    </View>
                </View>
            </TouchableHighlight>

        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginLeft:5,
        marginRight:5,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    description: {
        paddingTop: 8,
        paddingBottom: 10,
        fontSize: 11,
         textAlign: 'center'
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
    },
    bottomBox: {
        marginTop: 10,

        flexDirection: 'row',
        justifyContent: 'center',
       
    },
    cashBack: {
        color:'#7C4DFF',
        fontSize:12,
        fontWeight: 'bold',
    },
    offerButton: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 3,
        backgroundColor: '#7C4DFF'
    }
});

// AppRegistry.registerComponent('OfferCard', () => OfferCard);