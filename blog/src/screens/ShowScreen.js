import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context as BlogContext } from '../context/BlogContext'

const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({})