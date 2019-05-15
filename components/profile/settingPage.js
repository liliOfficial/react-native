import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import PersonalDetails from './setting/personalDetails';
import EmailAddress from './setting/emailAddress';
import CardLinkedOffers from './setting/cardLinkedOffers';
import Password from './setting/password';
import BankAccount from './setting/bankAccount';
import PaypelAccount from './setting/paypalAccount';
import TwoFactorAuthentication from './setting/twoFactorAuthentication';

const SECTIONS = [
    {
        header: 'Personal Details',
        content: <PersonalDetails />,
    },
    {
        header: 'Email Address',
        content: <EmailAddress />,
    },
    {
        header: 'Card-Linked Offers',
        content: <CardLinkedOffers />,
    },
    {
        header: 'Password',
        content: <Password />,
    },
    {
        header: 'Bank Account',
        content: <BankAccount />,
    },
    {
        header: 'PayPal Account',
        content: <PaypelAccount />,
    },
    {
        header: 'Two-Factor Authentication',
        content: <TwoFactorAuthentication />,
    },
    {
        header: 'Communication Preference',
        content: <BankAccount />,
    },
    {
        header: 'Close my Account',
        content: <BankAccount />,
    },
];

export default class SettingPage extends React.Component {

    state = {
        activeSections: []
    };

    _renderSectionTitle = section => {
        return (
            <View style={styles.title}></View>
        );
    };

    _renderHeader = (section, index, isActive, sections) => {
        return (
            <View style={isActive ? styles.headerActive : styles.header}>
                <Text style={isActive ? styles.headerTextActive : styles.headerText}>{section.header}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                {section.content}
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <View style={styles.layout}>
                <ScrollView >
                    <Accordion
                        sections={SECTIONS}
                        activeSections={this.state.activeSections}
                        renderSectionTitle={this._renderSectionTitle}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
                        underlayColor='#F5FCFF'
                    />
                </ScrollView>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        padding: 10,
        paddingBottom: 30
    },
    title: {
        height: 6
    },
    headerActive: {
        padding: 10,
        borderColor: '#484848',
        borderWidth: 1,
        backgroundColor: '#484848',
    },
    header: {
        padding: 10,
        borderColor: '#484848',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    headerTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    headerText: {
        color: '#484848',
        fontWeight: 'bold',
    }

});