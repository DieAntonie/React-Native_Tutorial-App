import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

const placeList = (props) => {
    const placeOutput = props.value.map((place, index) => (
        <ListItem key={index} placeName={place} />
    ))
    return (
        <View style={styles.listContainer}>
            {placeOutput}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        margin: 50,
    },
})

export default placeList;