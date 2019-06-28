import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { popupClose } from './actions';
import Navigation from './Navigation';

import { SuccessPopup, FailPopup, ConfirmPopup } from './components/share/popup';

class App extends Component {
    closePopup() {
        this.props.popupClose();
    }

    render() {
        const { popupShow, message, type, textLeft, textRight, onPressLeft, onPressRight } = this.props;
        return (
            <View style={{ flex: 1 }}>

                <Navigation />
                {popupShow && type === 'success' &&
                    <SuccessPopup message={message} onPress={() => this.closePopup()} />
                }
                {popupShow && type === 'fail' &&
                    <FailPopup message={message} onPress={() => this.closePopup()} />
                }
                {popupShow && type === 'confirm' &&
                    <ConfirmPopup message={message}
                        textLeft={textLeft} textRight={textRight} onPressLeft={onPressLeft} onPressRight={onPressRight} />
                }

            </View>
        );
    }
}

const mapStateToProps = state => {
    const { popupShow, message, type, textLeft, textRight, onPressLeft, onPressRight } = state.popup;
    return { popupShow, message, type, textLeft, textRight, onPressLeft, onPressRight };
}

export default connect(mapStateToProps, { popupClose })(App);
