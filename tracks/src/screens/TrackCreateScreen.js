import "../_mockLocation";
import { StyleSheet } from 'react-native';
import { useFocusEffect,useIsFocused } from '@react-navigation/native';
import React, { useContext,useCallback } from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Map from '../components/Map';
import { Text } from '@rneui/themed';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation'; // import the hook
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";


const TrackCreateScreen = () => {
  const insets = useSafeAreaInsets();
  const { add_location } = useContext(LocationContext);

  const isFocused = useIsFocused();

  const [err] = useLocation(isFocused,add_location); // use the hook

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // stopWatching();
        console.log("unfocused");
      };
    }, [])
  );


  return (
    <SafeAreaView style={{ paddingTop: insets.top }}>
      <Text h3 style={{marginHorizontal:10}}>Create a Track</Text>
      <Map />

      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm /> 
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});