import React from 'react';
import {Provider} from 'react-redux';
import {create, act} from 'react-test-renderer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/redux/reducers';
import {Home} from '../src/screens';

let reduxInitialState = {
  albumsData: {
    albumsList: [],
    singleAlbum: {},
  },
  filter: {
    showFilter: false,
  },
  loading: false,
};

const store = createStore(
  rootReducer,
  reduxInitialState,
  applyMiddleware(thunk),
);

let props = {
  navigation: {navigate: jest.fn()},
};

const HomeScreen = create(
  <Provider store={store}>
    <Home {...props} />
  </Provider>,
);

const ViewAlbumScreen = create(
  <Provider store={store}>
    <Home {...props} />
  </Provider>,
);

jest.runAllTimers();

test('Render Home Screen', () => {
  expect(HomeScreen).toMatchSnapshot();
});

test('Render View Album Screen', () => {
  expect(ViewAlbumScreen).toMatchSnapshot();
});

// test('View Album button press', () => {
//   const ViewAlbumButton = HomeScreen.root.findByProps({
//     testID: 'ViewAlbumButton',
//   });

//   ViewAlbumButton.onPress();

//   expect(props.navigation.navigate).toBeCalledWith('AlbumView');
// });
