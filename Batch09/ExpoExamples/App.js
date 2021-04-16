import React, { Component } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';

import * as Font from 'expo-font';

// Session 03
import HandlingTextInput from './src/Session03/Examples/HandlingEvent/HandlingTextInput';
import LifeCycle from './src/Session03/Examples/LifeCycle';

// Session 04
import Basic from './src/Session04/Basic';

// Session 05
// import ScrollViewExample from './src/Session05/Examples/ScrollViewExample';
// import ScrollViewWithManyDataExample from './src/Session05/Examples/ScrollViewWithManyDataExample';
// import FlatListExample from './src/Session05/Examples/FlatListExample';
// import SectionListExample from './src/Session05/Examples/SectionListExample';
// import SectionListAdvancedExample from './src/Session05/Examples/SectionListAdvancedExample';

// Session 06
// import BasicFetch from './src/Session06/Examples/BasicFetch';
// import NetworkingExample from './src/Session06/Examples/NetworkingExample';
// import Login from './src/Session06/Examples/Login';
// import Products from './src/Session06/Examples/Products';
// import AxiosExample from './src/Session06/Examples/AxiosExample';

// Eatme
import LoginScreen from './src/Eatme/LoginScreen';
import HomeScreen from './src/Eatme/HomeScreen';
import Categories from './src/Session05/Homeworks/Categories';

// Map
// import Map from './src/Map';

//
import UI02 from './src/UI-Change/UI02';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
      'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
      'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
      'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ minWidth: 414, minHeight: Platform.OS === 'web' ? 812 : null }}>
            {/* <LoginScreen /> */}
            {/* <HandlingTextInput /> */}
            {/* <LifeCycle /> */}
            {/* <Basic /> */}
            {/* <ScrollViewExample /> */}
            {/* <ScrollViewWithManyDataExample /> */}
            {/* <FlatListExample /> */}
            {/* <SectionListExample /> */}
            {/* <SectionListAdvancedExample /> */}
            {/* <HomeScreen /> */}
            {/* <Example02 /> */}
            {/* <Example03 /> */}
            {/* <Example04
              onChange={(status) => {
                console.log('STATUS ON APP', status);
              }}
            /> */}

            {/* <BasicFetch /> */}
            {/* <NetworkingExample /> */}

            {/* <Login /> */}
            {/* <Products /> */}
            {/* <Map /> */}
            {/* <AxiosExample /> */}
            <UI02 />
          </View>
        </SafeAreaView>
      );
    } else {
      return null;
    }
  }
}
