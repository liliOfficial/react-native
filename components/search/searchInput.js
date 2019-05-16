import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView } from 'react-native';

import CategoryCard from '../categories/categoryCard';
import listData from '../../asset/data/offers.json';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

export default class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchReq: false,
            list: []
        }
    }

    componentDidMount() {
        this.setState({
            list: listData
        })
    }

    searching = (keywords) => {
        console.log(keywords)
        keywords.length ? this.setState({ searchReq: true }) : this.setState({ searchReq: false });
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={(keywords) => this.searching(keywords)}
                />
                <ScrollView style={styles.searchBoard}>
                    <View style={{ paddingBottom: 25 }}>

                        {this.state.searchReq && this.state.list.map(item => {
                            return <CategoryCard key={item.id} data={item} navigation={this.props.navigation} />
                        })}

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 35,
        backgroundColor: '#fff',
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 8,
        borderRadius: 20,
        paddingLeft: 20
    },
    searchBoard: {
        backgroundColor: '#F5FCFF',
        height: height - 220,
        padding: 10,
        overflow: 'hidden'
    }
});
