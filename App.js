/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

    state = {
        placeName: "",
    };

    placeNameChangedHandler = (text) => {
        this.setState({
            placeName: text
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.placeInput}
                        placeholder="An awesome place"
                        onChangeText={this.placeNameChangedHandler}
                        value={this.state.placeName} />
                    <Button
                        style={styles.placeButton}
                        title="Add" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent: 'flex-start',
    },
    inputContainer: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    placeInput: {
        width: "70%",
    },
    placeButton: {
        width: "30%",
    }
});
