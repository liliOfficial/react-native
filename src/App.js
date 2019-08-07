import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { popupClose, toastPopup } from './actions';
import Navigation from './Navigation';

import { SuccessPopup, FailPopup, ConfirmPopup } from './components/share/popup';
import { Toast } from './components/share/toast';

class App extends Component {
    state = {

    }
    closePopup() {
        this.props.popupClose();
    }

    render() {
        const { popupShow, message, type, textLeft, textRight, onPressLeft, onPressRight, toastMessage } = this.props;
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
                <Toast background='#3f1dcb' message={toastMessage} autoClose={5000}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { popupShow, message, type, textLeft, textRight, onPressLeft, onPressRight } = state.popup;
    const { toastMessage } = state.toast;
    return { popupShow, message, type, textLeft, textRight, onPressLeft, onPressRight, toastMessage };
}

export default connect(mapStateToProps, { popupClose, toastPopup })(App);
