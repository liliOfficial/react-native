import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={(text) => this.setState({ text })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 35,
        backgroundColor:'#fff',
        marginLeft:12,
        marginRight:12,
        marginBottom: 8,
        borderRadius: 20,
        paddingLeft:20
    }
});
