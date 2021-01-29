import React from 'react';

import AlbumView from '../src/screens/AlbumView';
import {create} from 'react-test-renderer';

const AlbumViewScreen = create(<AlbumView />);

test('renders correctly', () => {
  expect(AlbumViewScreen).toHaveBeenCalled();
});
