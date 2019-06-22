import React, { Component }  from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component {

    itemDeletedHandler = (index) => {
        return this.props.onItemDeleted(index);
    }

    render() {
        return (
            <FlatList
                style={styles.listContainer}
                data={this.props.places}
                renderItem={info => 
                    <ListItem
                        value={info.item.key}
                        placeName={info.item.value}
                        onItemPressed={this.itemDeletedHandler} />
                }
            />
        );
    };
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        margin: 50,
    },
})
