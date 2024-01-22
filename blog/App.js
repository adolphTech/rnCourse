import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer,useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Provider as BlogProvider } from './src/context/BlogContext';


import IndexScreen from './src/screens/IndexScreen'

const App = () => {
  // const navigation = useNavigation();

  const Stack = createNativeStackNavigator()
  return (
   
      <NavigationContainer >
      <Stack.Navigator initialRouteName='IndexScreen'>
        <Stack.Screen name="IndexScreen" component={IndexScreen} options={{ title: 'Blogs ' }}/>
      </Stack.Navigator>

    </NavigationContainer>
    
    
    
  )
}

// I had to wrap the app in the BlogProvider to make the context work

const AppWrapper = () => {
  return (
    <BlogProvider>
    <App/>
     </BlogProvider> 
  )
}

export default AppWrapper
