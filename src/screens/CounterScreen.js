import { View, Text,StyleSheet,Button } from 'react-native'
import React,{useReducer} from 'react'

const CounterScreen = () => {

  const reducer = (state, action) => {

    switch (action.type) {
      case 'increase':
        return { ...state, count: state.count + 1 }
      case 'decrease':
        return { ...state, count: state.count - 1 }
      default:
        return state
    }
  }

  const CounterScreen = () => {
    const reducer = (state, action) => {
      switch (action.type) {
        case 'increase':
          return { ...state, count: state.count + 1 };
        case 'decrease':
          return { ...state, count: state.count - 1 };
        default:
          return state;
      }
    };

    return (
      <View>
        <Button title='Increase' onPress={() => { }} />
        <Button title='Decrease' onPress={() => { }} />
        <Text>{state.count}</Text>
      </View>
    );
  };
}
  const styles = StyleSheet.create({});
export default CounterScreen