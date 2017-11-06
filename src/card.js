import React from 'react';
import { TouchableWithoutFeedback, Platform, View } from 'react-native';

const Card = (props) => {
    const {
        children,
        horizontal,
        style,
        onPress
    } = props;

    if (onPress) {
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={[cardStyle(horizontal), style]}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        );
    }
    return (
        <View style={[cardStyle(horizontal), style]}>
            {children}
        </View>
    );
};

const cardStyle = (horizontal) => {
    let style;
    if (Platform.OS === 'ios' || Platform.Version <= 21) {
        style = [{
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 2
        }];
    } else {
        style = [{
            backgroundColor: '#FFF',
            borderRadius: 2,
            elevation: 2
        }];
    }

    if (horizontal) {
        style.push({
            borderRadius: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0
        });
    }
    return style;
};

export { Card };
