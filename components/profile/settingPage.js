import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import ReferPage from '../pages/referPage';

import PersonalDetails from './setting/personalDetails';

const SECTIONS = [
    {
        header: 'Personal Details',
        content: <PersonalDetails />,
    },
    {
        header: 'Email Address',
        content: <PersonalDetails />,
    },
    {
        header: 'Card-Linked Offers',
        content: <PersonalDetails />,
    },
    {
        header: 'Password',
        content: <PersonalDetails />,
    },
    {
        header: 'Bank Account',
        content: <PersonalDetails />,
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
                <Text style={styles.headerText}>{section.header}</Text>
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
        padding: 10
    },
    title: {
        height: 6
    },
    header: {
        padding: 10,
        borderColor: '#212121',
        borderWidth: 1,
        backgroundColor: '#212121',
    },
    headerActive: {
        padding: 10,
        borderColor: '#7c4dff',
        borderWidth: 1,
        backgroundColor: '#7c4dff',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
    }

});