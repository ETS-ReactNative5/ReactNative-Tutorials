import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Logo from './components/Logo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo text="Apple - US" logoText="Apple"></Logo>
        <Logo text="Google - US" logoText="Google"></Logo>
        <Logo text="Facebook - US" logoText="Facebook"></Logo>
      </View>
    );
  }
}
