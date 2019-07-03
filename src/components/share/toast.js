import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        };
    }

    componentDidMount() {
        this.addCard({
            message: 'a a a a aaaannanaa a a a a a a a a a a a 12000ms',
            autoClose: 3000
        });
        setTimeout(() => {
            this.addCard({
                message: 'Auto Close in 24000ms',
                autoClose: 24000
            });
        }, 1000);
        setTimeout(() => {
            this.addCard({
                message: 'Auto Close in 6000ms',
                autoClose: 6000,
                background: '#f44330'
                
            });
        }, 2000);
        setTimeout(() => {
            this.addCard({
                message: 'Auto Close in 12000ms',
                autoClose: 12000
            });
        }, 3000);
    }

    addCard = (message) => {
        setTimeout(() => {
            const info = this.state.info.concat(message);
            this.setState({ info });
        }, 0);
        if (message.autoClose) {
            setTimeout(() => {
                this.deleteCard(message);
            }, message.autoClose + 1500);
        }
    }

    deleteCard = (item) => {
        console.log(item);
        const info = this.state.info.filter(e => {
            return e !== item
        });
        console.log(this.state.info);
        this.setState({ info })
    }

    autoClose = () => {
        this.state.info.map(e => {
            if (e.autoClose) {
                setTimeout(() => {
                    this.deleteCard(e);
                }, e.autoClose + 1500);

            }
        })
    }

    render() {
        const { autoClose = Number.MAX_VALUE, background = 'rgba(0,0,0,0.8)' } = this.props;
        return (
            <View style={styles.container} autoClose={autoClose}>
                {this.state.info.map((item, index) => {
                    return (
                        <ToastSlideIn key={index} autoClose={item.autoClose || autoClose}>
                            <TouchableOpacity style={[styles.card, { backgroundColor: item.background || background }]} onPress={() => { this.deleteCard(item) }}>
                                <Icon name='times' size={16} style={styles.icon} />
                                <Text style={styles.text}>{item.message}</Text>
                                <ToastProcess style={styles.progress} autoClose={item.autoClose || autoClose}></ToastProcess>
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
        right: new Animated.Value(-400)
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
            <Animated.View
                style={{ ...this.props.style, position: 'relative', right: this.state.right }}>
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
        position: 'relative',
        display: 'flex'
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