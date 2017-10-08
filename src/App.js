import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import WelcomeScreen from './Components/WelcomeScreen'
import HomeScreen from './Components/HomeScreen'
import CustomNavBar from './Components/CustomNavBar'

const App = () => (
  <Router>
    <Scene
      key='root'
      navBar={CustomNavBar}
    >
      <Scene key='welcomeScreen' component={WelcomeScreen} title={'Welcome'} />
      <Scene key='homeScreen' component={HomeScreen} title={'Home'} back />
    </Scene>
  </Router>
)

export default App