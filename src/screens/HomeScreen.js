import React from 'react';
import { Text,View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      
      <Button onPress={() => { navigation.navigate("ComponentScreen") }} title='Go to Components Demo' />
      
      <Button title='Go to list demo' onPress={() => { navigation.navigate("ListScreen") }} />
      
      <Button title='Go to Image demo' onPress={()=>{navigation.navigate("ImageScreen")}}/>
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;