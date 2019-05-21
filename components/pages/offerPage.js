import React from 'react';
import { View, StyleSheet, ScrollView, Animated, NativeModules, LayoutAnimation, } from 'react-native';
import OfferList from '../offers/offerList';
import AppHeader from '../layout/header';
import { OfferCarousel } from '../offers/offerCarousel';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);


export default class OfferPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { height: null, opacity: 1 }
    }

    scrollY = y => {
        console.log('from parent' + y);
        if (y > 30) {
            LayoutAnimation.spring();
            this.setState({
                height: 0,
                opacity: 0
            });
        } else {
            LayoutAnimation.spring();
            this.setState({ height: null, opacity: 1 });
        }

    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <AppHeader navigation={this.props.navigation} />

                <View style={{ height: this.state.height, opacity: this.state.opacity }}>
                    <OfferCarousel />
                </View>


                <OfferList navigation={navigation} scrollY={this.scrollY} />
            </View>
        );
    }
}
