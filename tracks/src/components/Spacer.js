//this will be used to apply mrgin to a child component
import React from 'react';
import { View, StyleSheet } from 'react-native';



const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
 };



const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }

});

export default Spacer;