import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from 'react-native';
import AppHeader from '../layout/header';
import axios from 'axios';

export default function ReferPage(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({ data }) => setUser(data));
    })

    return (
        <View style={styles.layout}>
            <AppHeader navigation={props.navigation} />
            {!user &&
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#7c4dff" />
                </View>
            }
            {user &&
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
            }
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});