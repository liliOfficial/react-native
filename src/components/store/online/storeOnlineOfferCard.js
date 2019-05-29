import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Clipboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Collapsible from 'react-native-collapsible';

export default class StoreonlineOfferCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TermsShow: false,
            data: {
                description: `Mother's Day 20% off Breville Waffle and Pancake Maker's`,
                expires: '13/05/19',
                coupon: 'qwerasdf',
                terms: 'A minimum spend of $100 in a single transaction is required to be eligible for Cashback.'
            }
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
        const { description, expires, coupon, terms } = this.props.data;
        const couponRequire = coupon ? true : false;
        const termsRequire = terms ? true : false;
        return (
            <View style={styles.containter}>
                <View style={styles.card}>
                    <View style={styles.cardContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentDaily}>{description}</Text>
                            <Text style={styles.contentExpires}>EXPIRES: {expires}</Text>
                            {couponRequire &&
                                <View style={styles.coupon}>
                                    <TouchableHighlight style={styles.couponButton} underlayColor="#212121" onPress={this._setContent}>
                                        <Text style={styles.couponCopy}>Copy</Text>
                                    </TouchableHighlight>
                                    <Text style={styles.couponCode}>Coupon: {coupon}</Text>
                                </View>
                            }
                            {!couponRequire &&
                                <View>
                                    <Text style={styles.noCoupon}>Coupon: Not Required</Text>
                                </View>
                            }
                        </View>
                        <TouchableHighlight style={styles.shopButton} underlayColor="#212121" onPress={() => this.props.navigation.navigate('Go')}>
                            <Text style={styles.shopButtonText}>Shop Now</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                {termsRequire &&
                    <View style={styles.terms}>
                        <Collapsible collapsed={!this.state.TermsShow}>
                            <View style={styles.termsContent}>
                                <Text style={styles.termsText}>{terms}</Text>
                            </View>
                        </Collapsible>

                        <TouchableHighlight style={styles.termsButton} underlayColor="#484848" onPress={this.toggleTerms}>
                            <Text style={styles.termsButtonText}>Terms</Text>
                        </TouchableHighlight>
                    </View>
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    containter: {

    },
    terms: {
        alignItems: 'center',
        marginLeft: 2,
        marginRight: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    termsButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#484848',
        marginTop: -35,
    },
    termsButtonText: {
        fontSize: 10,
        fontWeight: '900',
        color: '#fff',
        marginTop: 30,
    },
    termsContent: {
        padding: 10,
        marginTop: -5,
        paddingBottom: 35,
        backgroundColor: '#484848',
        borderRadius: 5,
        zIndex: 5
    },
    termsText: {
        paddingTop: 10,
        color: '#fff',
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
        position: 'relative',
        overflow: 'hidden',
        padding: 10,
        paddingBottom: 0
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
        paddingBottom: 3
    },
    coupon: {
        alignItems: 'center',
        borderBottomColor: '#484848',
        borderBottomWidth: 3,
        paddingBottom: 5,
        paddingTop: 6
    },
    couponCode: {
        borderRadius: 3,
        paddingTop: 5,
        marginBottom: -3,
        paddingLeft: 20,
        color: '#484848',
        fontWeight: 'bold'
    },
    couponButton: {
        width: 100,
        height: 100,
        backgroundColor: '#484848',
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute',
        left: -12,
    },
    couponCopy: {
        paddingTop: 12,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        width: 40
    },
    noCoupon: {
        paddingBottom:5,
        fontWeight:'bold',
        color:'#484848'
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
        fontSize: 12,
        marginTop: 20,
        marginRight: 62,
        textAlign:'center'
    }
});
