import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { popupClose } from './actions';
import Navigation from './Navigation';

import { SuccessPopup, FailPopup, ConfirmPopup } from './components/share/popup';
import { Toast } from './components/share/toast';

class App extends Component {
    state = {
        info: [
            {
                message: ` By default, all toasts will inherit ToastContainer's props.Props defined on toast supersede ToastContainer's props. Props marked with * can only be set on the ToastContainer. The demo is not exhaustive, check the repo for more!`
            },
            {
                message: 'Wow so easy.'
            },
            {
                message: 'Something, Something, Something'
            },
            {
                message: 'a a a a aaaannanaa a a a a a a a a a a a '
            }
        ]
    }
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
                <Toast toastMessage={this.state.info} autoClose={100000}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { popupShow, message, type, textLeft, textRight, onPressLeft, onPressRight } = state.popup;
    return { popupShow, message, type, textLeft, textRight, onPressLeft, onPressRight };
}

export default connect(mapStateToProps, { popupClose })(App);
