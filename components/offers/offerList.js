import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import OfferCard from './offerCard';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

class OfferList extends Component {
    state = {
        list: [
            {
                id: 1,
                imageUrl: { uri: 'https://cdn.cashrewards.com/coles-online.jpg' },
                text: 'New customers, get $18 off when you spend $150 or more',
                cashBack: '10.00% Cashback',
                link: ''
            },
            {
                id: 2,
                imageUrl: { uri: 'https://cdn.cashrewards.com/dan-murphys.jpg' },
                text: 'New customers, get $18 off when you spend $150 or more',
                cashBack: '3.80% Cashback',
                link: ''
            },
            {
                id: 3,
                imageUrl: { uri: 'https://cdn.cashrewards.com/groupon.jpg' },
                text: 'New customers, get $18 off when you spend $150 or more',
                cashBack: '4.20% Cashback',
                link: ''
            },
            {
                id: 4,
                imageUrl: { uri: 'https://cdn.cashrewards.com/forever-new.jpg' },
                text: 'A minimum spend of $10 in a single transaction is required to be eligible for Cashback.',
                cashBack: '7.00% Cashback',
                link: ''
            },
        ]

    }

    render() {
        return (
            <View>
                <ScrollableTabView
                    tabBarUnderlineStyle={styles.tabBarUnderline}
                    style={styles.scrollableTab}
                    tabBarActiveTextColor='#5e3bbf'
                    tabBarTextStyle={styles.tabBarText}
                    renderTabBar={() => <DefaultTabBar style={styles.tabBar}  />}
                >
                    <View tabLabel='Online'>
                        {this.state.list.map(item => {
                            return <OfferCard key={item.id} data={item} navigation={this.props.navigation} />
                        })}
                    </View>
                    <View tabLabel='In-Store'>
                        {this.state.list.map(item => {
                            return <OfferCard key={item.id} data={item} navigation={this.props.navigation} />
                        })}
                    </View>
                </ScrollableTabView>

                <Button title="Load More" color="#5e3bbf" />
            </View>


        )
    }
}

const styles = StyleSheet.create({
    scrollableTab: {
        paddingBottom: 5,
        backgroundColor:'#fff'
    },
    tabBar: {
        height:45
    },
    tabBarText: {
        position:'relative',
        top:6
    },
    tabBarUnderline: {
        marginTop: 0,
        backgroundColor: '#5e3bbf',
        height: 2,
    }
});

export default OfferList;