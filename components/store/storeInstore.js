import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StoreInstoreCashback from './inStore/storeInstoreCashback';
import StoreinstoreStores from './inStore/storeInstoreStores';

export default class StoreInstore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <StoreInstoreCashback />
        <StoreinstoreStores />
      </View>
    );
  }
}
