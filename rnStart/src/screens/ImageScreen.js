import { View, StyleSheet } from 'react-native';
import React from 'react';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageDetail imageScore="8" title="Forest" imageSource={require("../../assets/forest.jpg")} />

      <ImageDetail imageScore="9" title="Mountain" imageSource={require("../../assets/mountain.jpg")} />

      <ImageDetail imageScore="7" title="Beach" imageSource={require("../../assets/beach.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ImageScreen;
