import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import LogoBox from '../share/logoBox';

export default class CategoryCard extends Component {
    render() {
        const { imageUrl, text, cashBack, link } = this.props.data;
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Store', { data: this.props.data })} underlayColor="white">
                <View style={styles.card}>
                    <LogoBox imageUrl={imageUrl} />
                    <View style={styles.offerBox}>
                        <View style={styles.offer}>
                            <Text style={styles.offerTitle}>IN-STORE</Text>
                            <View style={styles.offerDetail}>
                                <View style={styles.offerText}>
                                    <Text style={styles.words}>Unavilable</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.offer}>
                            <Text style={styles.offerTitle}>ONLINE</Text>
                            <View style={styles.offerDetail}>
                                <View style={styles.offerText}>
                                    <Text style={styles.words}>1.40%</Text>
                                    <Text style={styles.words}>CASHBACK</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.offer}>
                            <Text style={styles.offerTitle}>OFFERS</Text>
                            <View style={styles.offerDetail}>
                                <View style={styles.offerText}>
                                    <Text style={styles.words}>0</Text>
                                    <Text style={styles.words}>Active Offers</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
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
        alignItems: 'center'
    },
    description: {
        paddingTop: 8,
        paddingBottom: 10,
        fontSize: 11
    },
    offerBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
    },
    offer: {
        width: '33%',
        alignItems: 'center',
    },
    offerTitle: {
        color: '#212121',
        fontWeight: 'bold',
        fontSize: 12
    },
    offerDetail: {
        width: '100%',
        flex: 1,
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    offerText: {
        alignItems: 'center',
        flexWrap: 'wrap',
        
    },
    words: {
        color:'#484848',
        fontSize:12
    }
});
