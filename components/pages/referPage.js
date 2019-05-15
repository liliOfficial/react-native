import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AppHeader from '../layout/header';
import axios from 'axios';

import { Checkbox } from 'react-native-material-ui'

export default class ReferPage extends React.Component {
    state = { user: [] };
    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({ data }) => this.setState({ user: data }));
    }
    render() {
        return (
            <View style={styles.layout}>
                <AppHeader />

                <ScrollView>
                    <View>
                        <Checkbox label="I Agree" value="agree" checked={true} style={{backgroundColor:'red'}}/>
                    </View>
                    {this.state.user.map(user => {
                        return (
                            <View key={user.id}>
                                <Text>{user.title}</Text>
                                <Text>{user.body}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    }
});