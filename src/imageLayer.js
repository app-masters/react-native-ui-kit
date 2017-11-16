import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { OfflineImage } from './offlineImage';

class ImageLayer extends Component {
    render () {
        const {space, size, image, defaultImage, offline} = this.props;
        if (space) {
            return (
                <View style={{height: size}} />
            );
        } else {
            if(!offline){
                return (
                    <View style={{
                        position: 'absolute',
                        height: size,
                        left: 0,
                        right: 0,
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <OfflineImage
                            online={image}
                            offline={defaultImage}
                            style={{
                                resizeMode: 'cover',
                                height: size,
                                width: '100%'
                            }} />
                    </View>
                );
            } else {
                return (
                    <View style={{
                        position: 'absolute',
                        height: size,
                        left: 0,
                        right: 0,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            source={defaultImage}
                            style={{
                                resizeMode: 'cover',
                                height: size,
                                width: '100%'
                            }} />
                    </View>
                );
            }
        }
    }
}

export { ImageLayer };
