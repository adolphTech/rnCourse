import { useState, useEffect } from 'react';
import { requestForegroundPermissionsAsync, watchPositionAsync, LocationAccuracy } from 'expo-location';

export default (shouldTrack,callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }

     const sub = await watchPositionAsync(
        {
          accuracy: LocationAccuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      
      setSubscriber(sub);
    } catch (e) {
      console.log(e);
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    }
    else{
      // console.log("stop watching");
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [err];
};