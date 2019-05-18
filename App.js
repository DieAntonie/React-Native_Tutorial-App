/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
          style={{ width: 300, borderColor: "black", borderWidth: 1 }}
          placeholder="An awesome place"
          onChangeText={this.placeNameChangedHandler}
          value={this.state.placeName}
        />
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
