import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Index = ({text, onFilterPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.surface}>
        <Text style={styles.text}>{text}</Text>
      </View>
      {onFilterPress ? (
        <View style={styles.filterButton}>
          <TouchableOpacity onPress={onFilterPress}>
            <Ionicons size={35} color="white" name="md-menu-outline" />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Index;
