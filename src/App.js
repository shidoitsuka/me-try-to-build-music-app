import React from 'react'
import { StackNavigator } from 'react-navigation'

import WelcomeScreen from './Components/WelcomeScreen'
import SongScreen from './Components/SongScreen'
import CustomNavBar from './Components/CustomNavBar'

const App = StackNavigator({
  SongScreen: {
    screen: SongScreen,
    navigationOptions: {
      header: <CustomNavBar title={'Songs'} />,
    }
  },
})

export default App