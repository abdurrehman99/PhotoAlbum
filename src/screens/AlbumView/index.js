import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Header, ImageThumbnail, SwipeButton} from '../../components';
import {styles} from './styles';
import {connect} from 'react-redux';

const AlbumView = ({singleAlbum}) => {
  const [activeImage, setActiveImage] = useState(0);

  const swipeImage = (direction) => {
    console.log(direction);
    switch (direction) {
      case 'right':
        if (activeImage < singleAlbum.images.length - 1) {
          setActiveImage(activeImage + 1);
        }
        break;

      case 'left':
        if (activeImage > 0) {
          setActiveImage(activeImage - 1);
        }
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Header text={'Album View'} />
      <View style={styles.imageContainer}>
        <ImageThumbnail fullWidth uri={singleAlbum.images[activeImage]} />
        <SwipeButton
          onPress={() => swipeImage('right')}
          style={styles.rightIcon}
          right
        />
        <SwipeButton
          onPress={() => swipeImage('left')}
          style={styles.leftIcon}
          left
        />
      </View>
      <FlatList
        data={singleAlbum.images}
        numColumns={3}
        scrollEnabled
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={
              index === activeImage ? styles.activeThumbnail : styles.thumbnail
            }
            onPress={() => setActiveImage(index)}>
            <ImageThumbnail thumbnail uri={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = ({albumsData: {singleAlbum}}) => {
  return {
    singleAlbum,
  };
};

export default connect(mapStateToProps, {})(AlbumView);
