import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Index = ({right, left, style}) => {
  return (
    <View style={style}>
      {right ? (
        <TouchableOpacity>
          <FontAwesome5 size={35} color="white" name="chevron-circle-right" />
        </TouchableOpacity>
      ) : left ? (
        <TouchableOpacity>
          <FontAwesome5 size={35} color="white" name="chevron-circle-left" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Index;
