import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView, Alert, ActivityIndicator } from 'react-native';
import OfferCard from './offerCard';
import listData from '../../asset/data/offers.json'

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

class OfferList extends Component {
    state = {
        list: [],
        loadingData: false
    }

    componentDidMount() {
        this.setState({
            list: listData
        })
    }

    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 50
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom
    }

    loadMoreData = () => {
        this.setState({ loadingData: true });
        console.log('load more data');
        Alert.alert('load more data');
    }



    render() {
        return (
            <ScrollableTabView
                initialPage={0}
                tabBarUnderlineStyle={styles.tabBarUnderline}
                style={styles.scrollableTab}
                tabBarActiveTextColor='#7C4DFF'
                tabBarTextStyle={styles.tabBarText}

                renderTabBar={() => <DefaultTabBar style={styles.tabBar} />}
            >
                <ScrollView tabLabel='Online'
                    scrollEventThrottle={1}
                    onScroll={(event) => {
                        this.props.scrollY(event.nativeEvent.contentOffset.y);
                    }}
                    onMomentumScrollEnd={({ nativeEvent }) => {
                        console.log(nativeEvent);
                        if (this.isCloseToBottom(nativeEvent)) {
                            this.loadMoreData()
                        }

                    }}
                >
                    <View style={styles.cardBox}>
                        {this.state.list.map(item => {
                            return (
                                <View key={item.id} style={styles.cardContent}>
                                    <OfferCard data={item} navigation={this.props.navigation} />
                                </View>
                            )
                        })}
                    </View>
                    {this.state.loadingData &&
                        <View style={styles.loading}>
                            <ActivityIndicator size="large" color="#7c4dff" />
                        </View>

                    }
                </ScrollView>
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
    },
    loading: {
        padding: 10
    }
});

export default OfferList;