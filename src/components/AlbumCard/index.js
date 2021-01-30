import React from 'react';
import {View, Button} from 'react-native';
import {themeColor, placeholderImage} from '../../utils';
import {styles} from './styles';
import {ImageThumbnail, Heading, SubHeading} from '../../components';

const Index = ({title, owner, email, website, imageURL, id, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <ImageThumbnail uri={imageURL ? imageURL : placeholderImage} />
      <View style={styles.info}>
        <Heading text={title} />
        <SubHeading text={owner} />
        <SubHeading text={email} />
        <SubHeading text={website} />
        <View style={styles.buttonView}>
          <Button
            onPress={() => onButtonPress(id)}
            color={themeColor}
            title="View Album"
            testID="ViewAlbumButton"
          />
        </View>
      </View>
    </View>
  );
};

export default Index;
