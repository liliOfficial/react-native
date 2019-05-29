import React, { Component } from 'react';
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import ClickHistoryCard from './clickHistoryCard';

export default class ClickHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            history: [
                {
                    id: '1',
                    store: 'Coles Online',
                    date: 'Mon, Apr 15, 2019 03:20 PM'
                },
                {
                    id: '2',
                    store: 'Udemy',
                    date: 'Mon, Apr 15, 2019 03:20 PM'
                },
                {
                    id: '3',
                    store: 'Swarovski',
                    date: 'Mon, Apr 15, 2019 03:20 PM'
                },
                {
                    id: '4',
                    store: 'Merrel',
                    date: 'Mon, Apr 15, 2019 03:20 PM'
                },
                {
                    id: '5',
                    store: 'Swarovski',
                    date: 'Mon, Apr 15, 2019 03:20 PM'
                },
                {
                    id: '6',
                    store: 'Merrel',
                    date: 'Mon, Apr 15, 2019 03:20 PM'
                },
                {
                    id: '7',
                    store: 'Swarovski',
                    date: 'Mon, Apr 15, 2019 03:20 PM'
                },
                {
                    id: '8',
                    store: 'Merrel',
                    date: 'Mon, Apr 15, 2019 03:20 PM'
                },

            ]
        };
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.box}>
                    {this.state.history.map(item => {
                        return <ClickHistoryCard key={item.id} history={item}/>
                    })}

                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                        keyExtractor={({ id }, index) => id}
                    />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:30
    }
});
