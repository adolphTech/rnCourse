import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'; //this is the BlogPostForm component that is being imported from the BlogPostForm.js file in the components folder

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(BlogContext);

  const { id } = route.params; //this is the id passed from the ShowScreen component when the user clicks on the pencil icon

  const blogPost = state.find((blogPost) => blogPost.id === id); //this is the blogPost that is being edited by the user in the EditScreen component  from state in the BlogContext component

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content,()=>{navigation.pop()}) //this is the editBlogPost function from the BlogContext component that is being called when the user clicks on the save button in the BlogPostForm component added as 4th argument
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
