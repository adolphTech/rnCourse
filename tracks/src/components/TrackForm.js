import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { useIsFocused } from '@react-navigation/native';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const {
    state: { name, recording, locations},
    start_recording,
    stop_recording,
    change_name,
  } = useContext(LocationContext);

  console.log(locations.length);
  
  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          value={name}
          onChangeText={change_name}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="STOP" onPress={stop_recording} buttonStyle={{ backgroundColor: '#8B0000' }}/>
        ) : (
          <Button title="START" onPress={start_recording} />
        )}
      </Spacer>

      {
        !recording && locations.length ? (
          <Spacer>
            <Button title="SAVE TRACK" />
          </Spacer>
        ) : null
      }
    </>
  );
};

export default TrackForm;
