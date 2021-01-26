import React from 'react';
import {View, Text, Button} from 'react-native';
import {themeColor} from '../../utils';
import {styles} from './styles';
import {ImageThumbnail} from '../../components';

const Index = ({title, owner, email, website, imageURL, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <ImageThumbnail uri={imageURL} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subheading}>{owner}</Text>
        <Text style={styles.subheading}>{email}</Text>
        <Text style={styles.subheading}>{website}</Text>
        <View style={styles.buttonView}>
          <Button
            onPress={() => onButtonPress('id')}
            color={themeColor}
            title="View Album"
          />
        </View>
      </View>
    </View>
  );
};

export default Index;
