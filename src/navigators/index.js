/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import AppNavigator from './MainRoute';
import { useDispatch } from 'react-redux';
import { ON_SCREEN_CHANGED } from '../constants';

const MainWrapper = ({}) => {
  const dispatch = useDispatch();

  const getActiveRouteName = (navigationState) => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
  };

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getActiveRouteName(currentState);
          dispatch({ type: ON_SCREEN_CHANGED, payload: { currentScreen } });
        }}
      />
    </View>
  );
};

export default MainWrapper;
