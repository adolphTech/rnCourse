import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">

        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Business Search' }} />
        
        <Stack.Screen name="ResultsShowScreen" component={ResultsShowScreen} options={{ title: 'Business Search' }} />

        <Stack.Screen name="Details" component={DetailsScreen} />

         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;