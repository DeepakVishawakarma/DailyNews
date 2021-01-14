import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Splash from '../container/Splash';
import Home from '../container/Home';
import Detail from '../container/Detail';

const AppStackNavigation = createStackNavigator(
  {
    Home,
    Detail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const InitialNavigation = createSwitchNavigator(
  {
    Splash,
    Main: AppStackNavigation,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splash',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default InitialNavigation;
