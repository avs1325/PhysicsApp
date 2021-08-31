import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import MotionScreen from './screens/MotionScreen'
import EquationsScreen  from './screens/EquationsScreen';

export default function App (){    
  return(
    <AppContainer/>
  )
}

const switchNavigator = createSwitchNavigator({
  HomeScreen: {screen: HomeScreen},
  MotionScreen: {screen: MotionScreen},
  EquationsScreen: {screen: EquationsScreen},
})

const AppContainer = createAppContainer (switchNavigator)