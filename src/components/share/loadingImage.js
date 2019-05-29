import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

class SpinnerView extends Component {
    state = {
        scale: new Animated.Value(0),  // Initial value for opacity: 0
    }
    componentDidMount() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.scale,
                    {
                        toValue: 1,
                        duration: 1400,
                        delay: this.props.delay
                    }),
                Animated.timing(this.state.scale,
                    {
                        toValue: 0,
                        duration: 1400
                    }),
            ])

        ).start();
        // Starts the animation
    }

    render() {
        let { scale } = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: scale,         // Bind opacity to animated value
                    transform: [
                        { scale: this.state.scale },
                    ],
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

export default class LoadingImage extends Component {

    render() {
        return (
            <View style={styles.spinner}>
                <SpinnerView style={styles.bounce}></SpinnerView>
                <SpinnerView style={styles.bounce} delay={160}></SpinnerView>
                <SpinnerView style={styles.bounce} delay={320}></SpinnerView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinner: {
        flexDirection: 'row',
        width: 50
    },
    bounce:{
        width: 9,
        height: 9,
        margin: 5,
        backgroundColor: '#484848',
        borderRadius: 9,
    }
});


