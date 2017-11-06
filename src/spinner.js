import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
    const {screen, color} = props;
    if (screen) {
        return (
            <View style={styles.spinnerStyle}>
                <ActivityIndicator color={color} size={'large'} />
            </View>
        );
    } else {
        return (
            <View style={styles.spinnerStyle}>
                <ActivityIndicator color={color} size={'small'} />
            </View>
        );
    }
};

const styles = {
    spinnerStyle: {
        flex: 1,
        minHeight: 45,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    }
};

export { Spinner };
