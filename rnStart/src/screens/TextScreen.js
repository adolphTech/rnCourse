import { View, Text,StyleSheet,TextInput} from 'react-native'
import React,{useState} from 'react'

const TextScreen = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} value={name} onChangeText={(newValue) => setName(newValue)} /> 
      {name.length < 5 ? <Text style={{color:"red"}}>Password must be 5 characters</Text> : null}
      
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})
export default TextScreen