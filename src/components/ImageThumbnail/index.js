import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';

const Index = ({uri, fullWidth, thumbnail}) => {
  return (
    <View>
      <Image
        style={
          fullWidth
            ? styles.imageWide
            : thumbnail
            ? styles.imageThumbnail
            : styles.image
        }
        source={{uri}}
      />
    </View>
  );
};

export default Index;
