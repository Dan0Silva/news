import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'

const Stack = createStackNavigator()

export default () => {
    const navigatorProps = {
        screenOptions: {
            headerShown: false
        },
        initialRouteName: 'Home'
    }   

    return (
        <NavigationContainer>
            <Stack.Navigator {...navigatorProps} >
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}