import React from 'react';
import { Button } from 'react-native';

const FetchLocation = props => {
    return (
        <Button title="Get Location" onPress={props.onGetLocation} color="#6b52ae" />
    );
}

export default FetchLocation;