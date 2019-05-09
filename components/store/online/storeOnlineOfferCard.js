import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Collapsible from 'react-native-collapsible';

export default class StoreonlineOfferCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TermsShow: false
        };
    }

    _setContent() {
        Clipboard.setString('hello world');
    }

    toggleTerms = () => {
        const TermsShow = this.state.TermsShow;
        this.setState({ TermsShow: !TermsShow });
    }

    render() {
        return (
            <View style={styles.containter}>
                <View style={styles.card}>
                    <View style={styles.cardContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentDaily}>Mother's Day 20% off Breville Waffle and Pancake Maker's </Text>
                            <Text style={styles.contentExpires}>EXPIRES: 13/05/19</Text>
                            <View style={styles.coupon}>
                                <Text>Coupon: </Text>
                                <Text>Not Required</Text>
                                <TouchableHighlight style={styles.couponButton} underlayColor="#212121" onPress={this._setContent}>
                                    <Text style={styles.couponCopy}>Copy</Text>
                                </TouchableHighlight>
                            </View>

                        </View>
                        <View style={styles.shopButton}>
                            <Text style={styles.shopButtonText}>Shop</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.terms}>
                    <Collapsible collapsed={this.state.TermsShow}>
                        <View style={styles.termsContent}>
                            <Text style={styles.termsText}>A minimum spend of $100 in a single transaction is required to be eligible for Cashback.</Text>
                        </View>
                    </Collapsible>

                    <TouchableHighlight style={styles.termsButton} underlayColor="#212121" onPress={this.toggleTerms}>
                        <Text style={styles.termsButtonText}>Terms</Text>
                    </TouchableHighlight>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    containter: {

    },
    terms: {
        alignItems: 'center'
    },
    termsButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212121',
        marginTop:-35
    },
    termsButtonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 30,
        
    },
    termsContent: {
        padding:10,
        marginTop:-5,
        paddingBottom:30,
        backgroundColor:'#212121',
        borderRadius:5,
        
    },
    termsText: {
        color:'#fff',
        zIndex:3
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        zIndex: 5
    },
    cardContainer: {
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        padding: 10,
    },
    content: {
        marginRight: 40
    },
    contentDaily: {
        color: '#212121',
        paddingBottom: 5
    },
    contentExpires: {
        color: '#484848',
        paddingBottom: 5
    },
    coupon: {
        flexDirection: 'row'
    },
    shopButton: {
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: '#7C4DFF',
        padding: 10,
        alignItems: 'flex-end',
        position: 'absolute',
        right: -65,
        bottom: -65,

    },
    shopButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 30,
        marginRight: 65
    }
});
