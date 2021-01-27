import React, {useEffect} from 'react';
import {
  Modal,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {AlbumCard, Header, Backdrop, ActivityIndicator} from '../../components';
import {toggleFilter, getAlbumData, setAlbum} from '../../redux/actions';
import {themeColor} from '../../utils';
import {styles} from './styles';
import {connect} from 'react-redux';

const Home = ({
  navigation: {navigate},
  toggleFilter,
  showFilter,
  albumsList,
  getAlbumData,
  setAlbum,
}) => {
  const viewAlbumPress = (selectedIndex) => {
    setAlbum(albumsList[selectedIndex]);
    navigate('AlbumView');
  };

  useEffect(() => {
    getAlbumData();
  }, []);

  return (
    <View style={styles.container}>
      <Backdrop visible={showFilter} />
      {/* <ActivityIndicator /> */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showFilter}
        onRequestClose={toggleFilter}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Filter Options</Text>
          <Button
            title={'Apply Filter'}
            color={themeColor}
            onPress={toggleFilter}
          />
        </View>
      </Modal>
      <Header text={'Home'} onFilterPress={toggleFilter} />
      <FlatList
        style={styles.flatList}
        data={albumsList}
        scrollEnabled
        renderItem={({
          item: {username, name, email, website, images},
          index,
        }) => (
          <AlbumCard
            imageURL={images[0]}
            title={name}
            owner={username}
            email={email}
            website={website}
            id={index}
            onButtonPress={viewAlbumPress}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = ({filter: {showFilter}, albumsData: {albumsList}}) => {
  return {
    showFilter,
    albumsList,
  };
};

export default connect(mapStateToProps, {toggleFilter, getAlbumData, setAlbum})(
  Home,
);
