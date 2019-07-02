import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [
                {
                    message: ` By default, all toasts will inherit ToastContainer's props.Props defined on toast supersede ToastContainer's props. Props marked with * can only be set on the ToastContainer. The demo is not exhaustive, check the repo for more!`
                },
                {
                    message: 'Wow so easy.'
                },
                {
                    message: 'Something, Something, Something'
                },
                {
                    message: 'a a a a aaaannanaa a a a a a a a a a a a '
                }
            ]
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.addCard();
        }, (1000));

    }

    addCard = () => {
        const { message } = this.props;
        const info = this.state.info.concat({ message });
        this.setState({ info });
    }

    deleteCard = (item) => {
        const info = this.state.info.filter(e => {
            return e !== item
        });
        this.setState({ info })
    }

    autoClose = () => {

    }

    render() {
        const { autoClose = 5000 } = this.props;
        return (
            <View style={styles.container} autoClose={autoClose}>
                {this.state.info.map((item, index) => {
                    return (
                        <ToastSlideIn key={index} autoClose={autoClose}>
                            <TouchableOpacity style={styles.card} onPress={() => { this.deleteCard(item) }}>
                                <Icon name='times' size={16} style={styles.icon} />
                                <Text style={styles.text}>{item.message}</Text>
                                <ToastProcess style={styles.progress} autoClose={autoClose}></ToastProcess>
                            </TouchableOpacity>
                        </ToastSlideIn>
                    )
                })}
            </View>
        );
    }
}

class ToastProcess extends Component {
    state = {
        barWidth: new Animated.Value(300)
    }

    componentDidMount() {
        Animated.timing(
            this.state.barWidth,
            {
                toValue: 0,
                duration: this.props.autoClose,
            }
        ).start();
    }

    render() {
        return (
            <Animated.View style={{ ...this.props.style, width: this.state.barWidth }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

class ToastSlideIn extends Component {
    state = {
        right: new Animated.Value(-400),
    }

    componentDidMount() {
        Animated.sequence([
            Animated.timing(
                this.state.right,
                {
                    toValue: 0,
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.right,
                {
                    toValue: -400,
                    duration: 500,
                    delay: this.props.autoClose
                }
            )
        ]).start();
    }

    render() {
        return (
            <Animated.View style={{ ...this.props.style, position: 'relative', right: this.state.right }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        top: 50,
        padding: 10,
        zIndex: 999
    },
    card: {
        padding: 12,
        paddingRight: 16,
        width: 300,
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'relative'
    },
    text: {
        color: '#fff',
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 15,
        fontWeight: 'bold',
    },
    icon: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 6,
        color: 'rgba(255,255,255,0.8)'
    },
    progress: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: 0
    }

});