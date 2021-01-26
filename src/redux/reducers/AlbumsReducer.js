export default function (
  state = {
    albumsList: [],
    singleAlbum: {},
  },
  action,
) {
  switch (action.type) {
    case 'SET_ALBUMS_LIST':
      return {};
    case 'SET_ALBUM':
      return {};

    default:
      return state;
  }
}
