import {ApiCreator, GET_ALBUMS_API} from '../../utils';
import {toggleLoader} from '../actions';

export const getAlbumData = () => async (dispatch) => {
  dispatch(toggleLoader());
  try {
    const responseData = await ApiCreator('GET', GET_ALBUMS_API);
    console.log('responseData==>', responseData.length);
    dispatch(setAlbumsList(responseData));
    dispatch(toggleLoader());
  } catch (error) {
    console.log(error);
    dispatch(toggleLoader());
  }
};

export const setAlbum = (payload) => {
  return {
    type: 'SET_ALBUM',
    payload,
  };
};

export const setAlbumsList = (payload) => {
  return {
    type: 'SET_ALBUMS_LIST',
    payload,
  };
};
