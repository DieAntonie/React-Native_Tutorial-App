import React, { Component }  from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {

    state = {
        placeName: ""
    }

    placeNameChangedHandler = (text) => {
        this.setState({
            placeName: text
        })
    };

    placeSubmitHandler = () => {
        if (!this.state.placeName.trim()) {
            alert("Please enter place name.");
            return;
        }
        
        this.props.onPlaceAdded(this.state.placeName);
    };

    render() { 
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="An awesome place"
                    onChangeText={this.placeNameChangedHandler}
                    value={this.state.placeName} />
                <Button
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                    title="Add" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    placeInput: {
        width: "70%",
    },
    placeButton: {
        width: "30%",
    },
})
