import React from 'react';
import { View, StyleSheet, Animated, NativeModules, LayoutAnimation } from 'react-native';
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
        // console.log('from parent' + y);
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

    hideCarousel= ()=> {
        Animated.timing(this.state.height,
            {
                toValue: 1,
                duration: 1400,
                delay: this.props.delay
            }).start();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <AppHeader navigation={this.props.navigation} />
                {/* <SectionList
                    sections={[
                        { title: 'D', data: ['Devin'] },
                        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                /> */}

                <View style={{ height: this.state.height, opacity: this.state.opacity }}>
                    <OfferCarousel />
                </View>


                <OfferList navigation={navigation} scrollY={this.scrollY}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
