import {StyleSheet} from 'react-native';
import {
  screenWidth,
  subheadingColor,
  headingFontSize,
  subheadingFontSize,
} from '../../utils';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    flex: 1,
  },
  info: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: headingFontSize,
    marginBottom: 10,
  },
  subheading: {
    fontSize: subheadingFontSize,
    color: subheadingColor,
  },
  buttonView: {
    marginTop: 15,
    width: screenWidth * 0.3,
  },
});
