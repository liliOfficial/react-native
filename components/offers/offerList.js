import React, { Component } from 'react';
import { View, Button } from 'react-native';
import OfferCard from './offerCard';

class OfferList extends Component {
    state = {
        list: [
            {
                id: 1,
                imageUrl: { uri: 'https://cdn.cashrewards.com/coles-online.jpg' },
                text: 'New customers, get $18 off when you spend $150 or more',
                cashBack: '4.20% Cashback',
                link: ''
            },
            {
                id: 2,
                imageUrl: { uri: 'https://cdn.cashrewards.com/dan-murphys.jpg' },
                text: 'New customers, get $18 off when you spend $150 or more',
                cashBack: '4.20% Cashback',
                link: ''
            },
            {
                id: 3,
                imageUrl: { uri: 'https://cdn.cashrewards.com/groupon.jpg' },
                text: 'New customers, get $18 off when you spend $150 or more',
                cashBack: '4.20% Cashback',
                link: ''
            },
            {
                id: 4,
                imageUrl: { uri: '//cdn.cashrewards.com/forever-new.jpg' },
                text: 'New customers, get $18 off when you spend $150 or more',
                cashBack: '3.80% Cashback',
                link: ''
            },
        ]

    }

    render() {
        return (
            <View>
                {this.state.list.map(item => {
                    return <OfferCard key={item.id} data={item} navigation={this.props.navigation} />
                })}
                <Button title="Load More" color="#841584"/>
            </View>


        )
    }
}

// const styles = StyleSheet.create({
    
// });

export default OfferList;