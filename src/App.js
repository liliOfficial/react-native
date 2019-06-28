import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { popupClose } from './actions';
import Navigation from './Navigation';

import { SuccessPopup } from './components/share/popup';

class App extends Component {
    closePopup() {
        this.props.popupClose();
    }

    render() {
        const { popupShow, message } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Navigation />
                {popupShow &&
                    <SuccessPopup message={message} onPress={() => this.closePopup()} />
                }
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { popupShow, message } = state.popup;
    return { popupShow, message };
}

export default connect(mapStateToProps, { popupClose })(App);
