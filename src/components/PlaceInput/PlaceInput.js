import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const placeInput = (props) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            onChangeText={props.onChangeText}
            value={props.value} />
        <Button
            style={styles.placeButton}
            onPress={props.onPress}
            title="Add" />
    </View>
);

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

export default placeInput;