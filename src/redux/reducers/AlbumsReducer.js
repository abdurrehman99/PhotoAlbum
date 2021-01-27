export default function (
  state = {
    albumsList: [],
    singleAlbum: {},
  },
  action,
) {
  switch (action.type) {
    case 'SET_ALBUMS_LIST':
      return {
        ...state,
        albumsList: action.payload,
      };
    case 'SET_ALBUM':
      return {
        ...state,
        singleAlbum: action.payload,
      };

    default:
      return state;
  }
}
