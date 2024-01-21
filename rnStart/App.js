import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="ComponentScreen" component={ComponentScreen} />

        <Stack.Screen name="TextScreen" component={TextScreen} />

        <Stack.Screen name="SquareScreen" component={SquareScreen} />

        <Stack.Screen name="ListScreen" component={ListScreen} />

        <Stack.Screen name="ImageScreen" component={ImageScreen} />

        <Stack.Screen name="BoxScreen" component={BoxScreen} />

        <Stack.Screen name="ColorScreen" component={ColorScreen} />

        
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
