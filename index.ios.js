/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Animated,
    Easing,
    StyleSheet,
    Text,
    View
} from 'react-native';

class knitrn extends Component {

    atom = 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
    fish = 'https://i.imgur.com/HpSweHT.jpg'

    constructor(props) {
        super(props);
        /*
        this.state = {
            bounceValue: new Animated.Value(0),
        }
        /**/
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        /*
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
            this.state.bounceValue,
            {
                toValue: 0.8,
                friction: 1,
            }
        ).start();
        /**/
        this.spin();
    }

    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin());
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Butts
                </Text>
                <Animated.Image
                    style={{
                        width: 464,
                        height: 170,
                        transform: [{rotate: spin}]
                    }}
                    source={{uri: this.fish}}
                />
            </View>
        );
        /*
        return (
            <View style={styles.container}>
                <Animated.Image
                    source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                    style={{
                        flex: 1,
                        transform: [
                            {scale: this.state.bounceValue},
                        ],
                    }}
                />
            </View>
            /**/
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('knitrn', () => knitrn);
