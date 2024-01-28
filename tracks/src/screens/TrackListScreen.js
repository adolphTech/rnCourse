import { StyleSheet, Text, FlatList,TouchableOpacity, Button } from 'react-native'
import React, { useContext,useCallback } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { ListItem } from '@rneui/themed';
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ route }) => {

  const navigation = useNavigation();
  const { state, fetch_tracks } = useContext(TrackContext);
  //  console.log("TrackListScreen",state)
  
  useFocusEffect(
    useCallback(() => {
      fetch_tracks();
      // Return a cleanup function to be called when the screen is unfocused
      return () => {};
    }, [])
  );

  return (
    <>
      {/* <Text style={{fontSize:48}}>TrackListScreen</Text> */}
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
              <ListItem>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
            </TouchableOpacity>
          )
        }}
      
      />
    </>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})