import 'react-native-gesture-handler';
import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation';

const App = () => {
	return (
		<Provider store={store}>
			<AppNavigation />
		</Provider>
	);
};

export default App;
