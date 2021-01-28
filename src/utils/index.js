import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const themeColor = 'purple';
const subheadingColor = 'grey';

const headingFontSize = 16;
const subheadingFontSize = 15;

const placeholderImage = 'https://via.placeholder.com/400/92c952';

const GET_ALBUMS_API = 'https://hitboxing.herokuapp.com/getAlbumdata';

export {
  screenWidth,
  screenHeight,
  themeColor,
  subheadingColor,
  placeholderImage,
  headingFontSize,
  subheadingFontSize,
  GET_ALBUMS_API,
};

export async function ApiCreator(method, url, body) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}
