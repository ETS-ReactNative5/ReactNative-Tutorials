import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = createSwitchNavigator({
  Drawer: DrawerNavigator,
  Stack: StackNavigator,
  Tab: TabNavigator,



});