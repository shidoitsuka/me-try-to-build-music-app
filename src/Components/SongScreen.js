import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { Colors, Fonts, Metrics } from '../Themes'

import CustomButton from './CustomButton'

export default class SongScreen extends Component {

  renderSong = (item) => {
    return (
      <View style={{ margin: 8 }}>
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.singer}>
          {item.singer}
        </Text>
      </View>
    )
  }

  renderHeader = () => {
    return (
      <View style={styles.listHeader}>
        <CustomButton color={Colors.buttonPrimary} text={'SHUFFLE PLAY'} onPress={() => {}} />
      </View>
    )
  }

  render() {
    const dataSource = [
      {
        id: 1,
        title: 'Cubit2an',
        singer: 'Slank, Nirina Zubir',
      },
      {
        id: 2,
        title: 'Seperti Para Koruptor',
        singer: 'Slank, The Big Hip',
      },
      {
        id: 3,
        title: 'Juwita Malam - Blues',
        singer: 'Slank Plur',
      },
      {
        id: 4,
        title: 'Gara Gara Kamu',
        singer: 'Slank, Slank Since 1983',
      },
      {
        id: 5,
        title: 'Pelangi',
        singer: 'Slank, Peace And Love',
      },
      {
        id: 6,
        title: 'Orkes Sakit Hati',
        singer: 'Slank, get Married',
      },
    ]
    return (
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          renderItem={({item}) => this.renderSong(item)}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.renderHeader}
        />
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
    fontFamily: Fonts.type.light,
    color: Colors.white,
    textAlign: 'left',
    opacity: 0.8,
    marginBottom: 5
  },
  singer: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.medium,
    color: Colors.white,
    textAlign: 'left',
    opacity: 0.8,
  },
  listHeader: {
    backgroundColor: Colors.blackHeader,
    marginTop: Metrics.navBarheight,
  }
});
