import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import OfferCard from './offerCard';
import listData from '../../asset/data/offers.json'

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

class OfferList extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        this.setState({
            list: listData
        })
    }

    render() {
        return (
            <View>
                <ScrollableTabView
                    tabBarUnderlineStyle={styles.tabBarUnderline}
                    style={styles.scrollableTab}
                    tabBarActiveTextColor='#7C4DFF'
                    tabBarTextStyle={styles.tabBarText}
                    renderTabBar={() => <DefaultTabBar style={styles.tabBar} />}
                >
                    <View tabLabel='Online'>
                        <View style={styles.cardBox}>
                            {this.state.list.map(item => {
                                return (
                                    <View key={item.id} style={styles.cardContent}>
                                        <OfferCard data={item} navigation={this.props.navigation} />
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                    <View tabLabel='In-Store'>
                        <View style={styles.cardBox}>
                            {this.state.list.map(item => {
                                return (
                                    <View key={item.id} style={styles.cardContent}>
                                        <OfferCard data={item} navigation={this.props.navigation} />
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </ScrollableTabView>

                <Button title="Load More" color="#7C4DFF" />
            </View>


        )
    }
}

const styles = StyleSheet.create({
    scrollableTab: {
        paddingBottom: 5,
        backgroundColor: '#fff'
    },
    tabBar: {
        height: 45
    },
    tabBarText: {
        position: 'relative',
        top: 6
    },
    tabBarUnderline: {
        marginTop: 0,
        backgroundColor: '#7C4DFF',
        height: 2,
    },
    cardBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        width: width * 0.49,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        marginTop: 10

    }
});

export default OfferList;