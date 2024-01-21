import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class BoxScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.text1Style}></Text>
        <Text style={styles.text2Style}></Text>
        <Text style={styles.text3Style}></Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  text1Style: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-start',
    height: 100,
    width: 100,
    backgroundColor: 'red',
    
    
     
    
  },
  text2Style: {
    borderWidth: 3,
    borderColor: 'green',
    alignSelf: 'center',
    height: 100,
    width: 100,
    top: 30,
    backgroundColor: 'green',
    
     
    
  },
  text3Style: {
    borderWidth: 3,
    borderColor: 'purple',
    alignSelf: 'flex-start',
    height: 100,
    width: 100,
     backgroundColor: 'purple',
    
  }
});

export default BoxScreen