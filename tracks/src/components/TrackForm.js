import {  Text } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'
import Spacer from './Spacer'


const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" />
      </Spacer>
      <Spacer>
        <Button title="Start Recording" />
      </Spacer>
    </>
  )
}

export default TrackForm