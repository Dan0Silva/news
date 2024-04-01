import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  home: undefined
  post: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default () => {
  const navigatorProps = {
    screenOptions: {
      headerShown: false,
    },
    initialRouteName: 'Home',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator {...navigatorProps}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="post" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
