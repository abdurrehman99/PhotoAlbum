import {ApiCreator, GET_ALBUMS_API} from '../../utils';

export const setAlbum = (payload) => {
  return {
    type: 'SET_ALBUM',
    payload,
  };
};

export const getAlbumData = () => async (dispatch) => {
  try {
    const responseData = await ApiCreator('GET', GET_ALBUMS_API);
    console.log('responseData==>', responseData.length);
    dispatch(setAlbumsList(responseData));
  } catch (error) {
    console.log(error);
  }
};

export const setAlbumsList = (payload) => {
  return {
    type: 'SET_ALBUMS_LIST',
    payload,
  };
};
