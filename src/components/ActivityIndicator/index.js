import React from 'react';
import {ActivityIndicator} from 'react-native';
import {themeColor} from '../../utils';
import {styles} from './styles';

const Index = ({loading}) =>
  loading ? (
    <ActivityIndicator style={styles.loader} size="large" color={themeColor} />
  ) : null;

export default Index;
