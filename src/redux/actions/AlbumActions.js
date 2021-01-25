export const setAlbum = (payload) => {
  return {
    type: 'SET_ALBUM',
    payload,
  };
};

export const getAlbumData = (payload) => async () => {};

export const setAlbumsList = (payload) => {
  return {
    type: 'SET_ALBUMS_LIST',
    payload,
  };
};
