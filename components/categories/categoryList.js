import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../layout/header';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');
export default class CategoryList extends Component {
  state = {
    categories: [
      {
        name: 'Home'
      },
      {
        name: 'Food'
      },
      {
        name: 'Health'
      },
      {
        name: 'Life'
      },
      {
        name: 'Food'
      },
      {
        name: 'Food'
      },
      {
        name: 'Food'
      },
      {
        name: 'Food'
      },

    ]
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <View style={styles.layout}>
          <ScrollView>
            <Text> Browse Categories </Text>
            <View style={styles.grip}>
              <View style={styles.gripContent}><Text>111</Text></View>
              <View style={styles.gripContent}><Text>111</Text></View>
              <View style={styles.gripContent}><Text>111</Text></View>
              <View style={styles.gripContent}><Text>111</Text></View>
              <View style={styles.gripContent}><Text>111</Text></View>
              <View style={styles.gripContent}><Text>111</Text></View>
              <View style={styles.gripContent}><Text>111</Text></View>
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
    margin:5,
    backgroundColor:'#ccc'

  }
});
