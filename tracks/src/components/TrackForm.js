import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { useIsFocused } from '@react-navigation/native';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { name, recording, locations},
    start_recording,
    stop_recording,
    change_name,
  } = useContext(LocationContext);

  
  const [saveTrack] = useSaveTrack();
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
            <Button title="SAVE TRACK" onPress={saveTrack}/>
          </Spacer>
        ) : null
      }
    </>
  );
};

export default TrackForm;
