import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {AlbumCard, Header, Backdrop, ListItem, Heading} from '../../components';
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
  const [myAlbumList, setMyAlbumList] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    getAlbumData();
  }, []);

  useEffect(() => {
    setMyAlbumList(albumsList);
  }, [albumsList]);

  const viewAlbumPress = (index) => {
    setAlbum(myAlbumList[index]);
    navigate('AlbumView');
  };

  const setFilter = ({name}, index) => {
    setSelectedIndex(index);
    applyFilter(name);
    toggleFilter();
  };

  const applyFilter = (name) => {
    const filteredData = albumsList.filter((item) => item.name === name);
    setMyAlbumList(filteredData);
  };

  const clearFilter = () => {
    setMyAlbumList(albumsList);
    toggleFilter();
    setSelectedIndex(null);
  };

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
          <Heading text={'Filter Albums'} />
          {albumsList.map((item, i) => (
            <ListItem
              key={i}
              onPress={() => setFilter(item, i)}
              selected={selectedIndex === i}
              text={item.name}
            />
          ))}
          <Button
            title={'Clear Filter'}
            color={themeColor}
            onPress={clearFilter}
          />
        </View>
      </Modal>
      <Header text={'Home'} onFilterPress={toggleFilter} />
      <FlatList
        style={styles.flatList}
        data={myAlbumList}
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
