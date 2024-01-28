import { ActivityIndicator, StyleSheet } from 'react-native';
import React, { useContext, useRef, useEffect } from 'react';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const mapRef = useRef();

  const {
    state: { currentLocation, locations},
  } = useContext(LocationContext);

  // console.log(currentLocation);

  useEffect(() => {
    if (currentLocation) {
      mapRef.current.animateToRegion({
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [currentLocation]);





  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={{...currentLocation.coords}}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
<Polyline
  key={locations.length} // Add this line
  strokeWidth={4}
  coordinates={locations.map(loc => loc.coords)}
  strokeColor={"#0000FF"}
/> 
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});