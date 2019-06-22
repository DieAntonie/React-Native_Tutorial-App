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
        places: [],
    };

    placeAddedHandler = (placeName) => {
        this.setState((prevState) => {
            return {
                places: prevState.places.concat({key: prevState.places.length, value: placeName}),
            };
        });
    };

    placeDeletedHandler = (index) => {
        this.setState((prevState) => {
            return {
                places: prevState.places
                    .filter(place => place.key !== index)
                    .map((place, i) => ({key: i, value: place.value}))
            };
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
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
