import React, { Component } from 'react';
import { View, Picker } from 'react-native';

class PickerComponent extends Component {


    constructor(props) {
        super(props);
        this.state = { language: 'java' }
    }
    render() {
        return (
            <View style={{ padding: 10 }}>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="c#" value="c#" />
                </Picker>
            </View>
        );
    }
}

export default PickerComponent;