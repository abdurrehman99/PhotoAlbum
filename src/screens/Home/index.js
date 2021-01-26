import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {AlbumCard, Header, Backdrop} from '../../components';
import {toggleFilter} from '../../redux/actions';
import {themeColor} from '../../utils';
import {styles} from './styles';

const Home = ({navigation: {navigate}, toggleFilter, showFilter}) => {
  const viewAlbumPress = (a) => {
    console.log('Button pressed', a);
    navigate('AlbumView');
  };
  return (
    <View style={styles.container}>
      <Backdrop visible={showFilter} />
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
        data={[1, 2, 3, 4, 5]}
        scrollEnabled
        renderItem={({item, index}) => (
          <AlbumCard
            imageURL={'https://picsum.photos/710'}
            title={'Album Title'}
            owner={'Album Owner'}
            email={'Email'}
            website={'Website'}
            onButtonPress={viewAlbumPress}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = ({filter: {showFilter}}) => {
  return {
    showFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilter: () => dispatch(toggleFilter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
