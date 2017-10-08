import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import WelcomeScreen from './Components/WelcomeScreen'
import HomeScreen from './Components/HomeScreen'

const App = () => (
  <Router>
    <Stack key='root'>
      <Scene key='welcomeScreen' component={WelcomeScreen} title={'Welcome'} />
      <Scene key='homeScreen' component={HomeScreen} title={'Home'} />
    </Stack>
  </Router>
)

export default App