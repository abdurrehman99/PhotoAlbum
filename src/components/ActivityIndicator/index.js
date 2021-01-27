import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {themeColor} from '../../utils';
import {styles} from './styles';
import {Backdrop} from '../../components';

const Index = () => (
  <Backdrop visible={true}>
    <ActivityIndicator
      // style={{position: 'absolute', top: 0, zIndex: 500}}
      size="large"
      color={themeColor}
    />
  </Backdrop>
);

export default Index;
