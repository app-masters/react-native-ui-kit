import React from 'react';
import { View } from 'react-native';

const Divider = (props) => {
    return (
        <View style={localStyle()} />
    );
};

const localStyle = () => {
    return [{
        backgroundColor: '#000000',
        opacity: 0.12,
        height: 1,
        alignSelf: 'stretch'
    }];
};

export { Divider };
