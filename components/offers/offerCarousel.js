import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Dimensions from 'Dimensions';

export class OfferCarousel extends Component {
    state = {
        entries: [
            {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://cdn.cashrewards.com/banner-myer12-1311am-desktop.jpg'
            },
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://cdn.cashrewards.com/banner-mrportercpaincreaseapril-desktop.jpg'
            },
            {
                title: 'White Pocket Sunset',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                illustration: 'https://cdn.cashrewards.com/banner-stubhubaprilincrease-desktop.jpg'
            },
            {
                title: 'Acrocorinth, Greece',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://cdn.cashrewards.com/banner-jomaloneincreaseendsjuly-desktop.jpg'
            },
            {
                title: 'The lone tree, majestic landscape of New Zealand',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://cdn.cashrewards.com/banner-ww11-13aprilv2-desktop.jpg'
            },
            {
                title: 'Middle Earth, Germany',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://cdn.cashrewards.com/banner-stubhubaprilincrease-desktop.jpg'
            }
        ],
        activeSlide: 1
    };

    _renderItem({ item, index }) {
        const uri = item.illustration;
        return (
            <View style={styles.slide}>
                <Image
                    style={styles.image}
                    source={{ uri: uri }}
                />
            </View>
        );
    }
    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.dotContainer}
                dotStyle={styles.dot}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {

        const sliderWidth = Dimensions.get("window").width;;
        const itemWidth = sliderWidth * 0.95;
        const loop = true;
        const autoplay = true;
        const autoplayDelay = 3000;
        return (
            <View style={styles.container}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    loop= {loop}
                    autoplay={autoplay}
                    autoplayDelay ={autoplayDelay}
                />
                {this.pagination}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        borderRadius: 10
    },
    dotContainer: {
        position: "absolute",
        bottom: -10,
        width: '100%',
        padding: 10
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: -3

    },
    slide: {
        width: '100%',
    },

    container: {
        backgroundColor: '#841584',
        position: 'relative'
    }
})