// import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainNavigator from './MainNavigator';
import LoginNavigator from './LoginNavigator'

export default createSwitchNavigator(
  {
    Main: MainNavigator,
    Login: LoginNavigator,
  },
  {
    initialRouteName: 'Login',
  }
);