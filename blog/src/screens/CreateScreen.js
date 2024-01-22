import { StyleSheet } from 'react-native';
import React, {  useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
 
  const { addBlogPost } = useContext(BlogContext); //getting the addBlogPost function from the context
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('IndexScreen')); //calling the addBlogPost function from the context
      }}
    />
  );

 
};

export default CreateScreen;

const styles = StyleSheet.create({
  
});
