import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SearchInput from '../search/searchInput';

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInputShow: false
        };
    }

    render() {
        const { searchInputShow } = this.state;
        return (
            <SafeAreaView style={{ backgroundColor: '#7C4DFF' }}>
                <View style={styles.container}>
                    <Image source={require('../../asset/img/logo.png')} style={styles.logo} />
                    <TouchableHighlight onPress={() => this.setState({ searchInputShow: !searchInputShow })}>
                        <View>
                            {!this.state.searchInputShow &&
                                <Icon name="search" size={20} color="#fff" style={styles.search} />}
                            {this.state.searchInputShow &&
                                <Icon name="times" size={20} color="#fff" style={styles.search} />}
                        </View>
                    </TouchableHighlight>
                </View>
                {this.state.searchInputShow && <SearchInput navigation={this.props.navigation} />}
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
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 12,
        marginBottom: 40

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

export default AppHeader;