/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'

import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index'

type Props = {};
class App extends Component<Props> {
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    };
    
    placeDeletedHandler = () => {
        this.props.onDeletePlace();
    };

    placeSelectedHandler = key => {
        this.props.onSelectPlace(key);
    }

    modalCloseHandler = () => {
        this.props.onDeselectPlace();
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDelete={this.placeDeletedHandler}
                    onModalClose={this.modalCloseHandler}/>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
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

const mapStateToProps = state => {
    return {
        selectedPlace: state.places.selectedPlace,
        places: state.places.places
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
