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
            message: 'a a a a aaaannanaa a a a a a a a a a a a 30000ms',
            autoClose: 3000
        });
    }

    componentDidUpdate(prevProps) {
        console.log(this.props);
        const { message } = this.props
        if (message.message && message !== prevProps.message) {
            setTimeout(() => {
                this.addCard(message);
            }, 0);
        }

    }

    addCard = (message) => {
        const info = [...this.state.info, message];
        this.setState({ info });

        if (message.autoClose) {
            setTimeout(() => {
                let { info } = this.state;
                const index = info.indexOf(message);
                info[index].hide = true;
                this.setState({ info });
                console.log(info);
            }, message.autoClose + 750);
        }
    }

    render() {
        const { autoClose = Number.MAX_VALUE, background = 'rgba(0,0,0,0.8)' } = this.props;
        return (
            <View style={styles.container} autoClose={autoClose}>
                {this.state.info.map((item, index) => {
                    return (
                        <View key={index}>
                            {!item.hide &&
                                <ToastBlock item={item} autoClose={autoClose} background={background} />
                            }
                        </View>
                    )
                })}
            </View>
        );
    }
}

// interface ToastItem {
//     message: string;
//     background: string;
//     autoClose: number
// }

class ToastBlock extends Component {
    state = {
        show: true
    }
    deleteCard = () => {
        this.setState({ show: false })
    }
    render() {
        const { item, autoClose = Number.MAX_VALUE, background = 'rgba(0,0,0,0.8)' } = this.props;
        return (
            <View>
                {this.state.show &&
                    <ToastSlideIn autoClose={item.autoClose || autoClose}>
                        <TouchableOpacity style={[styles.card, { backgroundColor: item.background || background }]} onPress={() => { this.deleteCard(item) }}>
                            <Icon name='times' size={16} style={styles.icon} />
                            <Text style={styles.text}>{item.message}</Text>
                            {(autoClose !== Number.MAX_VALUE || item.autoClose) &&
                                <ToastProcess style={styles.progress} autoClose={item.autoClose || autoClose}></ToastProcess>
                            }
                        </TouchableOpacity>
                    </ToastSlideIn>
                }
            </View>
        )
    }
}

class ToastProcess extends Component {
    state = {
        barWidth: new Animated.Value(300),
    }

    componentDidMount() {
        Animated.sequence([
            Animated.timing(
                this.state.barWidth,
                {
                    toValue: 0,
                    duration: this.props.autoClose,
                }
            )

        ]).start();
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
        opacity: new Animated.Value(1)
    }

    constructor() {
        super()
        this.animatedValue = new Animated.Value(0)
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
                this.state.opacity,
                {
                    toValue: 0,
                    duration: 250,
                    delay: this.props.autoClose
                }
            )
        ]).start();
    }

    render() {
        return (
            <Animated.View
                style={{ ...this.props.style, position: 'relative', right: this.state.right, opacity: this.state.opacity }}>
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