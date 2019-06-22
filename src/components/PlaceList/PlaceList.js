import React, { Component }  from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component {

    itemDeletedHandler = (index) => {
        return this.props.onItemDeleted(index);
    }

    render() {
        const placeOutput = this.props.places.map((place, index) => (
            <ListItem
                key={index}
                placeName={place}
                onItemPressed={this.itemDeletedHandler} />
        ))
        return (
            <ScrollView style={styles.listContainer}>
                {placeOutput}
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        margin: 50,
    },
})
