import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, { useContext ,useEffect} from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({route,navigation}) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(BlogContext);
  
  useEffect(() => { 
    getBlogPosts();
  const listener = navigation.addListener('focus', () => {
      getBlogPosts();
  });
    
    return () => {
      listener.remove(); 
    };

  }, []);


  return (
    <View>
      

      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate("ShowScreen",{id:item.id})}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}-{item.id}</Text>
              <TouchableOpacity
                onPress={() => {
                  return deleteBlogPost(item.id);
                }}>
                <Feather name="trash" style={styles.icon} color="black" />
                </TouchableOpacity>
              </View>
              </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};




export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
