import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AppHeader from '../layout/header';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');
export default class CategoryList extends Component {
  state = {
    categories: [
      {
        id: 1,
        name: 'Home',
        icon: 'home'
      },
      {
        id: 2,
        name: 'Food',
        icon: 'utensils'
      },
      {
        id: 3,
        name: 'Health',
        icon: 'heartbeat'
      },
      {
        id: 4,
        name: 'Life',
        icon: 'hands'
      },
      {
        id: 5,
        name: 'Alcohol',
        icon: 'wine-bottle'
      },
      {
        id: 6,
        name: 'Child',
        icon: 'child'
      },
      {
        id: 7,
        name: 'Sport',
        icon: 'running'
      },
      {
        id: 8,
        name: 'Travel',
        icon: 'plane-departure'
      },
      {
        id: 9,
        name: 'Fashion',
        icon: 'tshirt'
      }

    ]
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader navigation={this.props.navigation}/>
        <View style={styles.layout}>
          <ScrollView>
            <Text style={styles.title}> Browse Categories </Text>
            <View style={styles.grip}>
              {this.state.categories.map(item => {
                return (
                  <TouchableHighlight key={item.id} onPress={() => this.props.navigation.navigate('CategoriesDetail', { data: item })} underlayColor="#fff">
                    <View style={styles.gripContent}>
                      <Icon name={item.icon} size={32} style={styles.icon}/>
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
    padding: width * 0.025,
    fontSize: 18,
    color: '#212121',
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
    color:'#212121'
  },
  name: {
    paddingTop:5,
    color: '#212121'
  }
});
