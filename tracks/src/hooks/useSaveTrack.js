import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext"; 
import { useNavigation } from '@react-navigation/native';

export default () => { 
  const navigation = useNavigation();
    const { create_track } = useContext(TrackContext);
  // const { state: { locations, name }, reset } = useContext(LocationContext);
  const { state ,reset} = useContext(LocationContext);

    
  
  const saveTrack = async () => { 
    await create_track(state.name, state.locations);
    reset()
    navigation.navigate('TrackList');
  }

    return [saveTrack];
}