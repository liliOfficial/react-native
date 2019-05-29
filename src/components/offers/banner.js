import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class Banners extends Component {
    render() {
        let pic = {
            uri: 'https://cdn.cashrewards.com/banner-dell01-03april-desktop.jpg'
        };
        return (
            <View style={styles.container}>
                <Image
                    source={require('../asset/img/banner-vosnbanner-desktop.jpg')}
                    style={styles.image}
                />
                {/* <Image source={pic} style={styles.banner} /> */}
            </View>
        );
    }
}

// AppRegistry.registerComponent('AwesomeProject', () => Banners);

const styles = StyleSheet.create({
    container: {
        width:'100%'
    },
    image: {
        width: '100%',
        height: 220,
        margin:5
    },
    banner: {
        width: '100%',
        height: 180,
    }
})



