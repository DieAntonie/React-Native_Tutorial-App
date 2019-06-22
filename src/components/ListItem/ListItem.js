import React, { Component }  from 'react';
import { View, Text, Image, TouchableHighlight, Button, StyleSheet } from 'react-native';

export default class ListItem extends Component {

    pressHandler = () => {
        return this.props.onItemPressed(this.props.value);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.pressHandler}>
                <View style={styles.listItem}>
                    <Image
                        resizeMode="cover"
                        source={this.props.placeImage}
                        style={styles.placeImage}/>
                    <Text>{this.props.value} - {this.props.placeName}</Text>
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
        flexDirection: "row",
        alignItems: "center",
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

