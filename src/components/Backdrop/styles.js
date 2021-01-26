import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../utils';
export const styles = StyleSheet.create({
  backdrop: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.2,
    zIndex: 500,
  },
});
