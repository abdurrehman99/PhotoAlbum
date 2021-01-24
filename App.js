import 'react-native-gesture-handler';
import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {View} from 'react-native';
const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				{/* <Navigation /> */}
				<View></View>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
