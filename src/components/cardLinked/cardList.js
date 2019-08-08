import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PurpleButton } from '../share/button';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CardListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 1,
                    number: '5*** **** **** 2345',
                    date: '01/01/2019',
                    type: 'master'
                },
                {
                    id: 2,
                    number: '4*** **** **** 6534',
                    date: '18/01/2019',
                    type: 'visa'
                },
                {
                    id: 3,
                    number: '4*** **** **** 1799',
                    date: '26/01/2019',
                    type: 'visa'
                },
                {
                    id: 4,
                    number: '5*** **** **** 5434',
                    date: '01/01/2019',
                    type: 'master'
                }
            ]
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#7C4DFF', '#F5FCFF', '#F5FCFF']} locations={[0.22, 0.22, 0.77]} style={styles.linearGradient}>
                    <ScrollView>
                        <Text style={styles.title}>Registered Card</Text>
                        {this.state.cards.map(card => {
                            return (
                                <View style={styles.card} key={card.id}>
                                    <View style={styles.cardContent}>
                                        <Text style={styles.date}>Date Added: {card.date}</Text>
                                        <Text style={styles.cardNumber}>{card.number}</Text>
                                        {card.type === 'master' &&
                                            <Image source={require('../../asset/img/mastercard.png')} style={styles.cardType} />
                                        }
                                        {card.type === 'visa' &&
                                            <Image source={require('../../asset/img/visa.png')} style={styles.cardType} />
                                        }

                                        <TouchableHighlight style={styles.deleteButton}>
                                            <Icon name='trash-alt' size={20} style={styles.icon} />
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            )
                        })}
                        {this.state.cards.length < 5 &&
                            <PurpleButton text='Link Card' onPress={() => this.props.navigation.navigate('LinkCard')}></PurpleButton>
                        }
                    </ScrollView>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    linearGradient: {
        padding: 10,
    },
    title: {
        paddingBottom: 8,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        marginBottom: 8,
        backgroundColor: '#ede7f6',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    cardContent: {
        padding: 15,
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
    },
    date: {
        color: '#212121',
        marginBottom: 5
    },
    cardNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#212121',
        marginBottom: 8,
    },
    cardType: {
        height: 30,
        width: 50,
        resizeMode: 'contain'
    },
    deleteButton: {
        position: 'absolute',
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        right: 8,
        top: 10
    }

});
