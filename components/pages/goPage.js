import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default class GoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#7c4dff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
