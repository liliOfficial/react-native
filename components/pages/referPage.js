import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AppHeader from '../layout/header';
import axios from 'axios';

export default function ReferPage(props) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({ data }) => setUser(data));
    })

    return (
        <View style={styles.layout}>
            <AppHeader navigation={props.navigation} />
            <ScrollView>
                {user.map(user => {
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

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    }
});