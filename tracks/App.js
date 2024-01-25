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

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  const { state } = useContext(AuthContext);

  //this is a stack for the track list screen and the track detail screen
  const TrackListStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {state.token ? (
        <Tab.Navigator>
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
    <LocationProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LocationProvider>
  );
};

export default AppWrapper;
