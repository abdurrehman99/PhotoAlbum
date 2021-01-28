import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Index = ({text, onPress, selected}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.text, selected ? styles.textSeleted : null]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Index;
