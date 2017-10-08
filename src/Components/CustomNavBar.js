import React from 'react'
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

import { Metrics, Colors, Fonts } from '../Themes'

StatusBar.setBackgroundColor(Colors.blackHeader)

class CustomNavBar extends React.Component {
  render () {
    const {
      title,
      back,
      search
    } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          { back
            ? <TouchableOpacity
              onPress={Actions.pop}
              style={styles.leftButton}>
              <Icon name='ios-arrow-back' size={25} color={Colors.white} />
            </TouchableOpacity>
            : null
          }
        </View>

        <View style={styles.middleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.rightContainer}>
          { search
            ? <TouchableOpacity
              onPress={() => {}}
              style={styles.rightButton}>
              <Icon name='ios-search' size={25} color={Colors.white} />
            </TouchableOpacity>
            : null
          }
        </View>
      </View>
    )
  }
}

export default CustomNavBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.blackHeader,
    height: Metrics.navBarheight,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  leftContainer: {
    flex: 1
  },
  middleContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightContainer: {
    flex: 1
  },
  title: {
    color: Colors.white,
    fontSize: Fonts.size.regular
  },
  leftButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})