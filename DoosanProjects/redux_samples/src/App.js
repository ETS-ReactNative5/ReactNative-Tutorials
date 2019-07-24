import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
// Provider of Redux
import { Provider } from 'react-redux';
// Store
import store from './ReduxApp/store';

// BEGIN: Sagas
import { sagaMiddleware } from './ReduxApp/middlewares';
import rootSagas from './ReduxApp/rootSagas';
sagaMiddleware.run(rootSagas);
// END: Sagas

import Counter from './ReduxApp/components/Counter';
import ATM from './ReduxApp/components/ATM';
import Photos from './ReduxApp/components/Photos';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<SafeAreaView style={{ flex: 1 }}>
					<Counter />
					<ATM />
					{/* <Photos /> */}
				</SafeAreaView>
			</Provider>
		);
	}
}
