import {StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '../../utils';
export const styles = StyleSheet.create({
  image: {
    width: screenWidth * 0.55,
    height: 180,
    borderRadius: 5,
  },
  imageWide: {
    width: screenWidth * 1,
    height: screenHeight * 0.28,
    borderRadius: 5,
  },
  imageThumbnail: {
    width: screenWidth * 0.3,
    height: 130,
    borderRadius: 5,
  },
});
