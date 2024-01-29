import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Entypo,Ionicons } from '@expo/vector-icons';

const TrackBackScreen = () => {
  const imageURL = "https://res.cloudinary.com/dchhoja40/image/upload/v1706146346/grill_gbbwvd.jpg";

  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.container, flex: 1 }}>
        <ImageBackground
          style={styles.image}
          source={{ uri: imageURL }}
        >
        </ImageBackground>
        <TouchableOpacity style={styles.floatingButtonR}>
          <Ionicons name="cart-outline" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.floatingButtonL}>
          <Entypo name="chevron-left" size={30} color="black" />
        </TouchableOpacity>
        {/* Rest of your screen components */}
      </View>
      
      <View style={{ flex: 2 ,top:50}}>
        <Text>TrackBackScreen</Text>
      </View>
    </View>
  );
}

export default TrackBackScreen;

const styles = StyleSheet.create({
  container: {
    top:40
  },
  image: {
    height: '100%', // Adjust this value to change the height of the image
    width: '100%', // This will make the image take up the full width of the screen
    resizeMode: "cover",
    justifyContent: "center"
  },
  floatingButtonR: {
    position: 'absolute',
    right: 10,
    top: 20,
    borderWidth: 5,
    borderRadius: 15,
    padding: 2,
    backgroundColor: "#FFC529",
    borderColor:"#FFC529"
  },
  floatingButtonL: {
    position: 'absolute',
    left: 10,
    top: 20,
    borderWidth: 5,
    borderRadius: 15,
    padding: 2,
    backgroundColor: "white",
    borderColor:"white"
  },
});