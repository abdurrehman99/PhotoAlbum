import {combineReducers} from 'redux';
import AlbumsReducer from './AlbumsReducer';
import FilterReducer from './FilterReducer';

export default combineReducers({
  albumsData: AlbumsReducer,
  filter: FilterReducer,
});
