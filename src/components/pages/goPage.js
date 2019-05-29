import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LoadingImage from '../share/loadingImage';
import LinearGradient from 'react-native-linear-gradient';
import LogoBox from '../share/logoBox';

export default class GoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "imageUrl": {
        "uri": "https://cdn.cashrewards.com/dan-murphys.jpg"
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#7C4DFF', '#F5FCFF', '#F5FCFF']} locations={[0.5, 0.5, 1]} style={styles.linearGradient}>
          <View>
            <Text style={styles.congratulations}>Congratulations</Text>
            <Text style={styles.upText}>you're on your way to</Text>
          </View>
          <View style={styles.logo}>
            <LogoBox imageUrl={this.state.imageUrl} />
          </View>
          <LoadingImage />
          <View style={{ paddingTop: 15 }}>
            <Text style={styles.downText}>After you have completed your purchase,</Text>
            <Text style={styles.downText}>Cashrewards will appear </Text>
            <Text style={styles.downText}>in your account within 7 days.</Text>
          </View>

        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  congratulations: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  upText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    textAlign: 'center'
  },
  logo: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 80,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 20
  },
  downText: {
    textAlign: 'center',
    color: '#484848',
    paddingBottom: 3
  }

});
