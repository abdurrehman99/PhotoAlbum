import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../utils';

export const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    zIndex: 500,
    top: screenHeight * 0.45,
    alignSelf: 'center',
  },
});
