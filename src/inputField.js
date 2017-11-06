import React from 'react';
import {
    TextInput,
    View,
    Image,
    Text,
    Platform
} from 'react-native';

const InputField = (props) => {
    const {
        style,
        value,
        autoCapitalize,
        maxLength,
        keyboardType,
        onChangeText,
        placeholder,
        secureTextEntry,
        icon,
        primaryColor,
        error,
        errorMessage,
        errorColor,
        suffix
    } = props;

    let color = primaryColor;
    if (error) {
        color = errorColor;
    }

    const {
        input,
        container,
        image,
        imageContainer,
        errorText,
        errorContainer,
        textContainer
    } = localStyle(color, error);

    return (
        <View style={style}>
            <View style={container}>
                <View style={textContainer}>
                    <TextInput
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                        autoCorrect={false}
                        autoCapitalize={autoCapitalize}
                        style={input}
                        value={value}
                        maxLength={maxLength}
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        underlineColorAndroid='transparent'
                    />
                    {(suffix && value) ? <Text style={{flex: 2}}>{suffix}</Text> : null}
                </View>
                <View style={imageContainer}>
                    <Image source={icon} style={image} />
                </View>
            </View>
            <View style={errorContainer}>
                <Text style={errorText}>{errorMessage}</Text>
            </View>
        </View>
    );
};

const localStyle = (color, error) => {
    let style = {
        input: {
            flex: 2,
            height: 45,
            color: '#000',
            fontSize: 16,
            fontFamily: 'System',
            textAlign: 'left'
        },
        textContainer: {
            flex: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 4
        },
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: 'white',
            borderRadius: 2,
            borderWidth: 0,
            ...Platform.select({
                ios: {},
                android: {
                    elevation: 2
                }
            })
        },
        image: {
            flex: 1,
            resizeMode: 'contain',
            margin: 10,
            tintColor: color
        },
        imageContainer: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center'
        },
        errorText: {
            color
        },
        errorContainer: {
            height: 0,
            width: 0,
            opacity: 0,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: 'transparent'
        }
    };
    if (error) {
        style.errorContainer.height = -1;
        style.errorContainer.width = -1;
        style.errorContainer.opacity = 1;
        style.container.borderWidth = 1;
        style.container.borderColor = color;
    }
    return style;
};

export { InputField };
