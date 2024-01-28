import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  AccountScreen,
  SigninScreen,
  SignupScreen,
  TrackCreateScreen,
  TrackDetailScreen,
  TrackListScreen,
  ResolveAuthScreen,
} from './src/screens/index.screens';
import { IndexScreenOptions } from './src/utils/headerOptions';

import { Provider as AuthProvider } from './src/context/AuthContext';

import { Context as AuthContext } from './src/context/AuthContext';

import { Provider as LocationProvider } from './src/context/LocationContext';

import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  const { state } = useContext(AuthContext);

  //this is a stack for the track list screen and the track detail screen
  const TrackListStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          title: 'Tracks', // Set the title
          headerTitleAlign: 'center', // Center the title
        }}
      />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {state.token ? (
         <Tab.Navigator
         screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
             let iconName;
 
             if (route.name === 'TrackCreate') {
               iconName = "plus"; // Change the icon name as per your need
             } else if (route.name === 'Account') { // Change 'OtherStack' to your other stack name
               iconName = "gear" // Change the icon name as per your need
             } else if (route.name === 'TrackListStack') { // Change 'OtherStack' to your other stack name
                iconName = "th-list" // Change the icon name as per your need
              }
 
             // You can return any component that you like here!
             return <FontAwesome name={iconName} size={25} color={color} />;
           },
         })}
         tabBarOptions={{
           activeTintColor: 'tomato',
           inactiveTintColor: 'gray',
         }}
       >
          <Tab.Screen
            name="TrackListStack"
            component={TrackListStack}
            options={{ title: 'Track List' }}
          />
          <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Signin">
          {/* <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} /> */}
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={IndexScreenOptions}
          />
          <Stack.Screen
            name="Signin"
            options={IndexScreenOptions}
            component={SigninScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

export default AppWrapper;
