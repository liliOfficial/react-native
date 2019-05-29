import React, { Component } from 'react';
import { View } from 'react-native';
import StoreOnlineCashback from './online/storeOnlineCashback';
import StoreOnlineOffers from './online/storeOnlineOffers';

export default class StoreOnline extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <StoreOnlineCashback navigation={this.props.navigation}/>
        <StoreOnlineOffers navigation={this.props.navigation}/>
      </View>
    );
  }
}
