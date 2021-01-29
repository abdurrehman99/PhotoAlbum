import 'react-native-gesture-handler';
import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import AppNavigation from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
