import {StyleSheet} from 'react-native';
import {screenWidth, themeColor} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColor,
    padding: 15,
    alignItems: 'center',
    width: screenWidth,
  },
  surface: {
    borderRadius: 25,
    backgroundColor: '#FFFF',
    width: '50%',
    padding: 10,
  },
  text: {
    alignSelf: 'center',
  },
});
