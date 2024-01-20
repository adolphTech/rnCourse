import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      
      <Button onPress={() => { navigation.navigate("ComponentScreen") }} title='Go to Components Demo' />
      
      <Button title='Go to list demo' onPress={() => { navigation.navigate("ListScreen") }} />
      
      <Button title='Go to Image demo' onPress={() => { navigation.navigate("ImageScreen") }} />
      
      <Button title='Go to Counter demo' onPress={() => { navigation.navigate("CounterScreen") }} />

      <Button title='Go to Color demo' onPress={() => { navigation.navigate("ColorScreen") }} />

      
      <Button title='Go to square  demo' onPress={() => { navigation.navigate("SquareScreen") }} />

      <Button title='Go to text  demo' onPress={() => { navigation.navigate("TextScreen") }} />

      <Button title='Go to box  demo' onPress={() => { navigation.navigate("BoxScreen") }} />
      
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;