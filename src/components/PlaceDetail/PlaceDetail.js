import React, { Component }   from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

export default class PlaceDetail extends Component {
    
    deleteHandler = () => this.props.onItemDelete(this.props.selectedPlace.key);
    
    closeHandler = () => this.props.onModalClose(this.props.selectedPlace.value);

    render() {
        let modalContent = null;
        if (this.props.selectedPlace) {
            modalContent = (
                <View>
                    <Image
                        source={this.props.selectedPlace.image}
                        style={styles.placeImage}/>
                    <Text style={styles.placeName}>{this.props.selectedPlace.value}</Text>
                </View>
            );
        }
        return (
            <Modal
                onRequestClose={this.closeHandler}
                visible={this.props.selectedPlace !== null}
                animationType={'slide'}>
                <View style={styles.modalContainer}>
                    {modalContent}
                    <View>
                        <Button title="Delete" color="red" onPress={this.deleteHandler}/>
                        <Button title="Close" onPress={this.closeHandler}/>
                    </View>
                </View>
            </Modal>
        );
    };
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});
