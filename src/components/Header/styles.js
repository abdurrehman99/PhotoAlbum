import {StyleSheet} from 'react-native';
import {screenWidth, themeColor} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColor,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
  },
  surface: {
    borderRadius: 25,
    backgroundColor: '#FFFF',
    width: screenWidth * 0.45,
    padding: 10,
  },
  filterButton: {position: 'absolute', right: 15},
  text: {
    alignSelf: 'center',
  },
});
