import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const Index = ({visible}) => {
  return visible ? <View style={styles.backdrop}></View> : null;
};
export default Index;
