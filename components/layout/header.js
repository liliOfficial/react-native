import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SearchInput from '../search/searchInput';

class AppHeader extends Component {

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#7C4DFF' }}>
                <View style={styles.container}>
                    <Image source={require('../../asset/img/logo.png')} style={styles.logo} />
                    <Icon name="search" size={20} color="#fff" style={styles.search}/>
                </View>
                {/* <SearchInput /> */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingTop:12,
        paddingLeft: 10,
        paddingRight:12,
        marginBottom: 40

    },
    logo: {
        width:'50%',
        height: 30,
        resizeMode: 'contain',       
    },
    search: {
        width:25,
        height:25
    }
});

export default AppHeader;