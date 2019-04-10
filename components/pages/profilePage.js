import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppFooter from '../layout/footer';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <AppFooter/>
      </View>
    );
  }
}
