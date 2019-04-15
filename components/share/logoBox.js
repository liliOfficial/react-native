import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');

const LogoBox = ({ imageUrl }) => {
    return (
        <View style={styles.logoBox}>
            <Image style={styles.logo} source={imageUrl} resizeMethod="resize" />
        </View>
    )
}

const styles = StyleSheet.create({
    logoBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,

    },
    logo: {
        width: width * 0.3,
        height: width * 0.15,
        resizeMode: 'contain'
    }
});

export default LogoBox;