import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import AppHeader from '../layout/header';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');
export default class CategoryList extends Component {
  state = {
    categories: [
      {
        id: 1,
        name: 'Home',
        icon: '../../asset/img/categories/home.png'
      },
      {
        id: 2,
        name: 'Food',
        icon: '../../asset/img/categories/home.png'
      },
      {
        id: 3,
        name: 'Health',
        icon: '../../asset/img/categories/home.png'
      },
      {
        id: 4,
        name: 'Life',
        icon: '../../asset/img/categories/home.png'
      },
      {
        id: 5,
        name: 'Food',
        icon: '../../asset/img/categories/home.png'
      },
      {
        id: 6,
        name: 'Food',
        icon: '../../asset/img/categories/home.png'
      },
      {
        id: 7,
        name: 'Food',
        icon: '../../asset/img/categories/home.png'
      },
      {
        id: 8,
        name: 'Food',
        icon: '../../asset/img/categories/home.png'
      },
      {
        id: 9,
        name: 'Food',
        icon: '../../asset/img/categories/home.png'
      }

    ]
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <View style={styles.layout}>
          <ScrollView>
            <Text style={styles.title}> Browse Categories </Text>
            <View style={styles.grip}>
              {this.state.categories.map(item => {
                const uri = require('../../asset/img/categories/home.png');
                return (
                  <TouchableHighlight key={item.id} onPress={() => this.props.navigation.navigate('CategoriesDetail', { data: item })} underlayColor="white">
                    <View style={styles.gripContent}>
                      <Image source={uri} style={styles.icon} />
                      <Text style={styles.name}>{item.name}</Text>
                    </View>
                  </TouchableHighlight>
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  title: {
    padding:width*0.025,
    fontSize:18,
    color:'#6b52ae',
    fontWeight: 'bold',
  },
  grip: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gripContent: {
    width: width * 0.3,
    height: width * 0.3,
    margin: 5,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain'
  },
  name: {
    color:'#6b52ae'
  }
});
