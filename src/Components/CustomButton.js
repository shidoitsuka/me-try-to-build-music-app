import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native'

import { Metrics, Colors, Fonts } from '../Themes'

class CustomButton extends React.Component {
  render() {
    const {
      color,
      text,
      onPress,
    } = this.props
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: color }]}
          onPress={onPress}
        >
          <Text style={styles.white}>{text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 50,
    paddingTop: 17,
    paddingBottom: 17,
    paddingHorizontal: 50,
  },
  white: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Fonts.type.medium,
  }
})
