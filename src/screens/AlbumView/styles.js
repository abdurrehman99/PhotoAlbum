import {StyleSheet} from 'react-native';
import {themeColor} from '../../utils';

export const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 10,
  },
  container: {alignItems: 'center', flex: 1},
  rightIcon: {position: 'absolute', right: 10, top: '35%'},
  leftIcon: {position: 'absolute', left: 10, top: '35%'},
  thumbnail: {marginHorizontal: 5, marginTop: 10},
  activeThumbnail: {
    marginHorizontal: 3,
    marginTop: 8,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: themeColor,
  },
});
