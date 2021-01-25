import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Index = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.surface}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Index;
