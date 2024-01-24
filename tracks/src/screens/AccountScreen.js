import { StyleSheet, Text, View, } from 'react-native'
import React, { useContext } from 'react'
import { Button } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from '../context/AuthContext'


const AccountScreen = () => {

  const { signout } = useContext(AuthContext);
  return (
    <View >
      <Text style={{fontSize:48}} >AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})