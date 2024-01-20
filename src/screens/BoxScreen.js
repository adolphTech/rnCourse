import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class BoxScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.text1Style}>CHILD 1</Text>
        <Text style={styles.text2Style}>CHILD 2</Text>
        <Text style={styles.text3Style}>CHILD 3</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    
  },
  text1Style: {
    borderWidth: 3,
    borderColor: 'red',
     
    
  },
  text2Style: {
    borderWidth: 3,
    borderColor: 'red',
    // alignSelf: 'stretch',
    // position: 'absolute',
    fontSize: 18,
    left:10,
    
     
    
  },
  text3Style: {
    borderWidth: 3,
    borderColor: 'red',
     
    
  }
});

export default BoxScreen