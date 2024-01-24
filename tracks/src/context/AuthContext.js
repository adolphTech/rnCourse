import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import * as SecureStore from "expo-secure-store";


const authReducer = (state, action) => { 

  switch (action.type) { 
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };//delete errorMessage
    case 'signin':
      return { errorMessage: '', token: action.payload };//delete errorMessage
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await SecureStore.getItemAsync("token");
  if (token) {
    dispatch({ type: 'signin', payload: token });
  }
}

const clearErrorMessage = dispatch => () => { 
  dispatch({ type: 'clear_error_message' })
}

const signup = (dispatch) => { 
  return async ({ email, password,navigation }) => { 
    // make api request to sign up with that email and password
    try { 
      const response = await trackerApi.post('/signup', { email, password });
      
      await SecureStore.setItemAsync("token", response.data.token);

      dispatch({ type: 'signup', payload: response.data.token })

      // // Navigate to the main page after successful signup
      // navigation.navigate("TrackList");
      
    } catch (err) { 
      dispatch({type : 'add_error', payload: 'Something went wrong with sign up'})
    }

    // if we sign up, modify our state, and say that we are authenticated

    // if signing up fails, we probably need to reflect an error message somewhere
  }
}

const signin = (dispatch) => { 
  return async ({ email, password }) => { 
    // try to signin
    try { 
      // handle success by updating state
      const response = await trackerApi.post('/signin', { email, password });

      await SecureStore.setItemAsync("token", response.data.token);

      dispatch({ type: 'signin', payload: response.data.token })

    } catch (err) { 
      // handle failure by showing error message (somehow)
      dispatch({type : 'add_error', payload: 'Something went wrong with sign in'})
    }

    // handle success by updating state

    // handle failure by showing error message (somehow)
  }
}

const signout = (dispatch) => { 
  return async () => { 
    // somehow sign out!!!

    await SecureStore.deleteItemAsync("token");
    dispatch ({ type: 'signout' })
  }
}

export const { Context, Provider } = createDataContext(
  authReducer,
  {signin, signout, signup,clearErrorMessage,tryLocalSignin},
  { token:null,errorMessage: ''  }
); 