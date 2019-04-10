import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight,Alert } from 'react-native';

class AppFooter extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor="white" style={styles.box} onPress={this._onPressButton} >
                    <View >
                        <Image
                            source={require('../../asset/img/icon/offers.png')}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Offers</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="white" style={styles.box}>
                    <View>
                        <Image
                            source={require('../../asset/img/icon/categories.png')}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Categories</Text>
                    </View></TouchableHighlight>
                <TouchableHighlight underlayColor="white" style={styles.box}>
                    <View >
                        <Image
                            source={require('../../asset/img/icon/friend.png')}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Refer a Friend</Text>
                    </View></TouchableHighlight>
                <TouchableHighlight underlayColor="white" style={styles.box}>
                    <View >
                        <Image
                            source={require('../../asset/img/icon/user.png')}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Profile</Text>
                    </View></TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        backgroundColor: '#eee',
        height: 80,
        width: '25%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        // marginTop:10,
        width: 25,
        height: 25
    },
    title: {
        fontSize: 6,
        paddingTop: 3,
        paddingBottom: 15,
        color: '#000',
        textAlign:'center',
    }

});

export default AppFooter;