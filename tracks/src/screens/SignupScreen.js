import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage  } = useContext(AuthContext);
  
 

  useFocusEffect(
    useCallback(() => {
      // This is equivalent to the onWillFocus event in NavigationEvents
      clearErrorMessage();

      return () => {
        // This is equivalent to the onDidBlur event in NavigationEvents
        // Add any cleanup code here
      };
    }, [])
  );

  // console.log(state.token);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      
      />

      <NavLink routeName="Signin" text="Already have an account ? Sign in instead"/>

    
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
  
  
});
