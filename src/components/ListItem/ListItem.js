import React, { Component }  from 'react';
import { View, Text, TouchableHighlight, Button, StyleSheet } from 'react-native';

export default class ListItem extends Component {

    pressHandler = () => {
        return this.props.onItemPressed(this.props.key);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.pressHandler}>
                <View style={styles.listItem}>
                    <Text>{this.props.placeName}</Text>
                </View>
            </TouchableHighlight>
        );
    };
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
    }
})

