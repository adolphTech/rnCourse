import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";


const switchNavigator = createSwitchNavigator({
  loginFlow: createSwitchNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createSwitchNavigator({
    trackListFlow: createSwitchNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })

});