import {StyleSheet} from 'react-native';
import {subheadingColor} from '../../utils';
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
    fontSize: 16,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 14,
    color: subheadingColor,
  },
  buttonView: {
    marginTop: 15,
  },
});
