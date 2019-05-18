/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput, Button } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  state = {
    placeName: "",
  };

  placeNameChangedHandler = (text) => {
    this.setState({
      placeName: text
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="An awesome place"
          onChangeText={this.placeNameChangedHandler}
          value={this.state.placeName}
        />
        <Button title="Add" />
      </View>
    );
  }
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
