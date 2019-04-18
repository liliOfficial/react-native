import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CategoryCard from '../categories/categoryCard';
import listData from '../../asset/data/offers.json';

export default class CategoryPage extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#7C4DFF'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    constructor(props) {
        super(props);
        this.state = { list: [] }
    }

    componentDidMount() {
        this.setState({
            list: listData
        })
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#7C4DFF'}}>
                <View style={styles.container}>
                    <Text style={styles.title}>Attractions and Experiences</Text>
                </View>
                <View style={{backgroundColor:'#F5FCFF'}}>
                    <View style={styles.box}>
                    {this.state.list.map(item => {
                        return <CategoryCard key={item.id} data={item} navigation={this.props.navigation}/>
                    })}
                </View>
                </View>
                

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7C4DFF',
        height: 120,
        alignItems: 'center'
    },
    title: {
        margin: 10,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    box: {
        
        position: 'relative',
        top: -80,
        marginBottom:-60
    }
});


