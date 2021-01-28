import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {paddingLeft: 5},
  modalView: {
    marginVertical: screenHeight * 0.1,
    marginHorizontal: screenWidth * 0.1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
