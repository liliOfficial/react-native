import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
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
      <View style={{ flex: 1 }}>
        <ScrollView style={{ padding: 10, paddingBottom: 40 }}>
          <StoreOnlineCashback />
          <StoreOnlineOffers/>
        </ScrollView>
      </View>

    );
  }
}
