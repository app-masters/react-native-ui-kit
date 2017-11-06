import React, { Component } from 'react';
import { Animated } from 'react-native';

class OfflineImage extends Component {
    constructor () {
        super();
        this.state = {
            renderImage: null,
            opacity: new Animated.Value(0),
            loaded: false
        };
        this.onImageFail = this.onImageFail.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.cycleAnimation = this.cycleAnimation.bind(this);
    }

    componentWillMount () {
        if (this.props.online) {
            this.setState({renderImage: {uri: this.props.online}});
        } else {
            this.setState({renderImage: this.props.offline});
        }
    }

    cycleAnimation () {
        Animated.sequence([
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 500
            }),
            Animated.timing(this.state.opacity, {
                toValue: 0.5,
                duration: 500
            })
        ]).start(event => {
            if (event.finished && !this.state.loaded) {
                this.cycleAnimation();
            }
        });
    }

    onLoad () {
        this.setState({loaded: true});
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 500
        }).start();
    }

    onImageFail () {
        this.setState({renderImage: this.props.offline});
    }

    render () {
        return (
            <Animated.Image
                source={this.state.renderImage}
                onLoadStart={this.cycleAnimation}
                onLoad={this.onLoad}
                onError={this.onImageFail}
                style={[this.props.style,
                    {opacity: this.state.opacity, backgroundColor: '#DDD'}
                ]} />
        );
    }
}

export { OfflineImage };
