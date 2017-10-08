import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Colors, Fonts } from '../Themes'

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to my music app that built with React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button
          onPress={() => Actions.homeScreen()}
          title={'Home'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  welcome: {
    fontSize: Fonts.size.large,
    color: Colors.white,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 5,
  },
});
