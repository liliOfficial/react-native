import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import StoreOnline from './storeOnline';
import StoreInstore from './storeInstore';

export default class StoreTab extends Component {
    _onRefresh = (callback) => {
        callback && setTimeout(callback({ test: 'dkjdd' }, 3000))
    }

    render() {
        const collapsableComponent = (
            <View style={{ height: 300, backgroundColor: 'yellow', width: '100%' }}>
            </View>
        );
        return (
            <ScrollableTabView
                pullToRefresh={this._onRefresh}
                initialPage={1}
                collapsableBar={collapsableComponent}
                tabBarUnderlineStyle={styles.tabBarUnderline}
                style={styles.scrollableTab}
                tabBarActiveTextColor='#7C4DFF'
                tabBarTextStyle={styles.tabBarText}
                renderTabBar={() => <DefaultTabBar style={styles.tabBar} />}
            >
                <ScrollView tabLabel='Online'>
                    <StoreOnline navigation={this.props.navigation} />
                </ScrollView>
                <View tabLabel='In-Store'>
                    <StoreInstore />
                </View>
            </ScrollableTabView>
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
    }
});
