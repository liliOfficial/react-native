import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../layout/header';

export default class CategoryList extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
                <AppHeader />
                <View style={styles.layout}>
                    <ScrollView>
                        <Text> Browse Categories </Text>
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
  }
});
