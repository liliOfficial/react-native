import React, { Component } from 'react';
import { View } from 'react-native';
import Banners from '../banner';
import OfferList from '../offers/offerList';

export default class OfferPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Banners />
        <OfferList />
      </View>
    );
  }
}