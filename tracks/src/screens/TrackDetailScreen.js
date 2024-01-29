import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from 'react-native-maps';


const TrackDetailScreen = ({ navigation, route }) => {
  const { _id } = route.params;
  const { state } = useContext(TrackContext);
  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;
  // console.log(track.locations)
  
  
  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords
        }} >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})