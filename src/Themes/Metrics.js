import { Platform } from 'react-native'

const metrics = {
  navBarheight: (Platform.OS === 'ios') ? 64 : 60
}

export default metrics