import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import { Colors, Fonts } from '../Themes'

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <Text style={styles.title}>
            Senyummu Hanya Untukku
          </Text>
          <Text style={styles.singer}>
            Trisouls . Senyummu Hanya Untukku
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={styles.title}>
            Pandangan Pertama
          </Text>
          <Text style={styles.singer}>
            Slank, Nirina Zubir
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={styles.title}>
            Dia
          </Text>
          <Text style={styles.singer}>
            Anji . Dia
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.regular,
    color: Colors.white,
    textAlign: 'left',
    marginBottom: 5
  },
  singer: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.medium,
    color: Colors.white,
    textAlign: 'left'
  },
});
