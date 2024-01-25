import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useCallback, useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage, tryLocalSignin } =
    useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);



//  console.log(state.loading);
 

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

  return (
    state.loading ? (
      <View style={styles.loadingContainer}>
           <ActivityIndicator animating={true} color={MD2Colors.red800} size={80}/>

      </View>
    ) : (
      <View style={styles.container}>
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage={state.errorMessage}
          submitButtonText="Sign In"
          onSubmit={signin}
        />
        <NavLink
          text="Don't have an account? Sign up instead!"
          routeName="Signup"
        />
      </View>
    )
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
