import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import store from './src/redux/store'
import { initApp } from './utils';

import AppNavigator from './AppNavigator';

class App extends React.Component {

	componentWillMount() {
		initApp()
	}

	render() {
		const persistor = persistStore(store);
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<AppNavigator />
				</PersistGate>
			</Provider>
		);
	}
}

export default App;