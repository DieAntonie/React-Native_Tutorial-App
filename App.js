/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

type Props = {};
export default class App extends Component<Props> {

    state = {
        placeName: "",
        places: [],
    };

    placeNameChangedHandler = (text) => {
        this.setState({
            placeName: text
        })
    };

    placeSubmitHandler = () => {
        if (!this.state.placeName.trim()) {
            alert("please enter place name.");
            return;
        }

        this.setState((prevState) => {
            return {
                places: prevState.places.concat(prevState.placeName),
            };
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceInput
                    onChangeText={this.placeNameChangedHandler}
                    value={this.state.placeName}
                    onPress={this.placeSubmitHandler} />
                <PlaceList value={this.state.places} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent: 'flex-start',
    },
});
