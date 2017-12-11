import React from 'react';
import {
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';
import { Spinner } from './spinner';

const Button = (props) => {
    let {
        style,
        onPress,
        label,
        image,
        subText,
        subTextStyle,
        imageColor,
        primaryColor,
        secondaryColor,
        textColor,
        raised,
        isLoading,
        keepCapitalize
    } = props;

    let styles;

    if (isLoading) {
        onPress = () => {};
    }

    if (raised) {
        styles = localStyle(style, primaryColor, textColor, 3, '#FFFFFF');
    } else {
        styles = localStyle(style, 'transparent', primaryColor, 0, '#999999');
    }
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        return (
            <TouchableNativeFeedback
                onPress={onPress}
                background={
                    TouchableNativeFeedback.Ripple(styles.rippleColor, false)
                }>
                {buttonView(styles, label, image, imageColor, subText, subTextStyle, isLoading, keepCapitalize)}
            </TouchableNativeFeedback>
        );
    } else if (raised) {
        return (
            <TouchableHighlight
                underlayColor={secondaryColor}
                onPress={onPress}>
                {buttonView(styles, label, image, imageColor, subText, subTextStyle, isLoading, keepCapitalize)}
            </TouchableHighlight>
        );
    } else {
        return (
            <TouchableOpacity
                underlayColor={secondaryColor}
                onPress={onPress}>
                {buttonView(styles, label, image, imageColor, subText, subTextStyle, isLoading, keepCapitalize)}
            </TouchableOpacity>
        );
    }
};

const buttonView = (styles, label, image, imageColor, subText, subTextStyle, isLoading, keepCapitalize) => {
    if (image) {
        return (
            <View style={styles.button}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image
                        style={{
                            resizeMode: 'contain',
                            height: 30,
                            tintColor: imageColor
                        }}
                        source={image} /></View>
                <View style={{flex: 3, alignItems: 'flex-start'}}>
                    <Text style={styles.text}>
                        {(Platform.OS === 'android' && !keepCapitalize) ? label.toUpperCase() : label}
                    </Text>
                    <Text style={subTextStyle}>
                        {subText}
                    </Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.button}>
                {isLoading
                    ? <View style={{justifyContent:'center', alignItems: 'center'}}>
                        <Spinner color={styles.text.color} />
                    </View>
                    : <Text style={styles.text}>
                        {(Platform.OS === 'android' && !keepCapitalize) ? label.toUpperCase() : label}
                    </Text>
                }

            </View>
        );
    }
};

// Style definido de acordo com os guidelines do Material Design
const localStyle = (style, color, textColor, elevation, rippleColor) => {
    return ({
        button: [{
            flexDirection: 'row',
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color,
            minHeight: 45,
            borderRadius: 2,
            ...Platform.select({
                ios: {},
                android: {
                    elevation
                }
            })
        }, style],
        text: {
            color: textColor,
            textAlign: 'center',
            fontSize: 14,
            fontFamily: 'System',
            ...Platform.select({
                ios: {},
                android: {
                    fontWeight: 'bold'
                }
            })
        },
        rippleColor
    });
};

export { Button };
