import {combineReducers} from 'redux';
import AlbumsReducer from './AlbumsReducer';
import FilterReducer from './FilterReducer';
import LoaderReducer from './LoaderReducer';

export default combineReducers({
  albumsData: AlbumsReducer,
  filter: FilterReducer,
  loading: LoaderReducer,
});
