import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', language: 'java' }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    input: {
        height: 40,
    }
});

export default InputComponent;