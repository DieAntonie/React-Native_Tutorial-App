/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/holiday.jpg';

type Props = {};
export default class App extends Component<Props> {

    state = {
        selectedPlace: null,
        places: []
    };

    placeAddedHandler = (placeName) => {

        this.setState((prevState) => {
            return {
                selectedPlace: null,
                places: prevState.places.concat({
                    key: prevState.places.reduce((prev, curr) => (prev.key > curr.key ? prev.key : curr.key), 0) + 1,
                    value: placeName,
                    image: placeImage || {
                        uri: "https://www.thelocal.fr//userdata/images/article/e7ed5c096c888a7290ac39275aa8998880137a8b43e58fa184f6296ffddc3b6b.jpg"
                    }
                }),
            };
        });
    };

    placeSelectedHandler = (key) => {
        this.setState((prevState) => {
            return {
                selectedPlace: prevState.places.find(place => place.key === key) || null,
                places: prevState.places
                    .filter(place => place.key !== key)
            };
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    onItemDelete={this.placeSelectedHandler}
                    onModalClose={this.placeAddedHandler}/>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
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
