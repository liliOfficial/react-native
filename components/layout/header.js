import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SearchInput from '../search/searchInput';

export default function AppHeader(props) {
    const [searchInputShow, setSearchInputShow] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: '#7C4DFF' }}>
            <View style={styles.container}>
                <Image source={require('../../asset/img/logo.png')} style={styles.logo} />
                <TouchableHighlight onPress={() => setSearchInputShow(!searchInputShow)} underlayColor="transparent">
                    <View>
                        {!searchInputShow &&
                            <Icon name="search" size={20} color="#fff" style={styles.search} />}
                        {searchInputShow &&
                            <Icon name="times" size={20} color="#fff" style={styles.search} />}
                    </View>
                </TouchableHighlight>
            </View>
            {searchInputShow && <SearchInput navigation={props.navigation} />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 12,
        marginBottom: 10

    },
    logo: {
        width: '50%',
        height: 30,
        resizeMode: 'contain',
    },
    search: {
        width: 25,
        height: 25
    }
});
