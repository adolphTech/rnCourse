import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const ComponentScreen = () => {
  const name = "Adolph";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:45
  },
  subHeaderStyle: {
    
  }
})

export default ComponentScreen