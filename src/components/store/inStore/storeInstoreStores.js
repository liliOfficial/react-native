import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNPickerSelect from 'react-native-picker-select';

const states = [
    {
        label: 'All',
        value: '',
    },
    {
        label: 'WA',
        value: 'wa',
    },
    {
        label: 'QLD',
        value: 'qld',
    },
    {
        label: 'NSW',
        value: 'nsw',
    },
    {
        label: 'VIC',
        value: 'vic',
    },
    {
        label: 'SA',
        value: 'sa',
    },
];

export default class StoreinstoreStores extends Component {
    constructor(props) {
        super(props);
        this.inputRefs = {
            firstTextInput: null,
            state: null,
            favSport1: null,
        };
        this.state = {
            stateFilter: '',
            stores: [
                {
                    id: '1',
                    subub: 'Bondi Junction',
                    address: '470 Oxford Street',
                    state: 'nsw'
                },
                {
                    id: '2',
                    subub: 'Chatswood NSW',
                    address: '345 Victoria Ave',
                    state: 'nsw'
                },
                {
                    id: '3',
                    subub: 'Chadstone VIC',
                    address: '1341 Dandenong Rd',
                    state: 'vic'
                },
            ]
        };
    }

    render() {
        const placeholder = {
            label: 'Select a state...',
            value: null,
            color: '#9EA0A4',
        };
        console.log(this.state);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Participating Stores</Text>
                <View style={styles.card}>
                    <View>
                        <RNPickerSelect
                            placeholder={placeholder}
                            items={states}
                            onValueChange={value => {
                                this.setState({
                                    stateFilter: value,
                                });
                            }}
                            onUpArrow={() => {
                                this.inputRefs.firstTextInput.focus();
                              }}
                              onDownArrow={() => {
                                this.inputRefs.favSport1.togglePicker();
                              }}
                            value={this.state.stateFilter}
                            ref={el => {
                                this.inputRefs.firstTextInput = el;
                              }}
                            Icon={() => {
                                return <Icon name="sort-down" size={12} color='#212121' />;
                            }}
                        />
                    </View>
                    <View style={styles.storeList}>
                        {this.state.stores
                            .filter(item => this.state.stateFilter ? item.state === this.state.stateFilter : item)
                            .map(item => {
                                return (
                                    <View style={styles.storeListItem} key={item.id}>
                                        <Text style={styles.subub}>{item.subub}</Text>
                                        <Text style={styles.address}>{item.address}</Text>
                                    </View>
                                )
                            })}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    },
    title: {
        fontSize: 18,
        color: '#212121',
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        zIndex: 5,
        padding: 10
    },
    storeList: {
        marginTop: 5,
        paddingTop: 8,
        borderTopColor: '#484848',
        borderTopWidth: 1,
    },
    storeListItem: {
        marginTop: 3
    },
    subub: {
        fontWeight: '700',
        color: '#212121',
    },
    address: {
        color: '#484848'
    }
});
