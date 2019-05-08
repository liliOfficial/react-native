import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import StoreOnline from './storeOnline';
import StoreInstore from './storeInstore';

export default class StoreTab extends Component {

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
                    <ScrollView tabLabel='Online'>
                        <StoreOnline />
                    </ScrollView>
                    <ScrollView tabLabel='In-Store'>
                        <StoreInstore />
                    </ScrollView>
                </ScrollableTabView>

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
    }
});
