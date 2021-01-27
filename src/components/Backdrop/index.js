import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const Index = ({visible, children}) => {
  return visible ? <View style={styles.backdrop}>{children}</View> : null;
};
export default Index;
