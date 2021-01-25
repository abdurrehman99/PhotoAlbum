import React, {useState} from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {Header, ImageThumbnail, SwipeButton} from '../../components';
import {styles} from './styles';

const AlbumView = () => {
  const [activeImage, setActiveImage] = useState(1);
  let imageURL = 'https://picsum.photos/709';
  return (
    <View style={styles.container}>
      <Header text={'Photo Album App'} />
      <View style={styles.imageContainer}>
        <ImageThumbnail fullWidth uri={imageURL} />
        <SwipeButton style={styles.rightIcon} right />
        <SwipeButton style={styles.leftIcon} left />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        numColumns={3}
        scrollEnabled
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={
              index === activeImage ? styles.activeThumbnail : styles.thumbnail
            }
            onPress={() => setActiveImage(index)}>
            <ImageThumbnail thumbnail uri={'https://picsum.photos/706'} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumView);
