import React, { Component } from 'react';

import App from './App';
import LogNav from './components/log/loginNav';

import { connect } from 'react-redux';

class Auth extends Component {

    render() {
        return (
            this.props.user ? <App /> : <LogNav />
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.auth.user };
}

export default connect(mapStateToProps)(Auth);


