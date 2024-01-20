import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

const ImageDetail = ({title,imageSource,imageScore}) => {
  return (
    <View>
      <Image source={imageSource}/>
      <Text>{title}</Text>
      <Text>{imageScore}</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
  
})

export default ImageDetail