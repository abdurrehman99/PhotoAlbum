import {StyleSheet} from 'react-native';
import {
  screenWidth,
  subheadingColor,
  subheadingFontSize,
  themeColor,
} from '../../utils';
export const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.5,
  },

  text: {
    fontSize: subheadingFontSize,
    color: subheadingColor,
    marginBottom: 5,
    padding: 5,
  },

  textSeleted: {
    borderColor: themeColor,
    borderWidth: 1,
  },
});
