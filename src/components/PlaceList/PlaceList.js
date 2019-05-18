import React, { Component }  from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component {

    render() {
        const placeOutput = this.props.places.map((place, index) => (
            <ListItem key={index} placeName={place} />
        ))
        return (
            <View style={styles.listContainer}>
                {placeOutput}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        margin: 50,
    },
})
