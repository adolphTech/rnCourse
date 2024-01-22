import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as BlogProvider } from './src/context/BlogContext';

import ShowScreen from './src/screens/ShowScreen';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { IndexScreenOptions, ShowScreenOptions } from './src/utils/headerOptions';


const App = () => {
  // const navigation = useNavigation();

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexScreen">
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={IndexScreenOptions}
        />

        <Stack.Screen
          name="ShowScreen"
          component={ShowScreen}
          options={ShowScreenOptions}

        />

        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{ title: 'Blogs ' }}
        />

        <Stack.Screen
          name="EditScreen"
          component={EditScreen}
          options={{ title: 'Blogs ' }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// I had to wrap the app in the BlogProvider to make the context work

const AppWrapper = () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};

export default AppWrapper;
