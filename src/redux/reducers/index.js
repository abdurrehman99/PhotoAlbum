import {combineReducers} from 'redux';
import AlbumsReducers from './AlbumsReducers';

export default combineReducers({
	albumsData: AlbumsReducers,
});
