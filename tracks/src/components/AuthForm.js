import { StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Text } from '@rneui/themed';
import Spacer from './Spacer';



const AuthForm = ({headerText,errorMessage,onSubmit,submitButtonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
       <Spacer>
        <Text h3>{ headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
     
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      
      <Spacer>
        <Button title={submitButtonText}onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  )
}

export default AuthForm

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    // marginTop: 3,
  },
})