import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexScreen from './src/screens/IndexScreen'

const App = () => {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='IndexScreen'>
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
      </Stack.Navigator>

    </NavigationContainer>
    
  )
}

export default App
