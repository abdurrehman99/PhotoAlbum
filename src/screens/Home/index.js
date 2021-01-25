import React from 'react';
import {ScrollView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {AlbumCard, Header} from '../../components';
import {getAlbumData} from '../../redux/actions/AlbumActions';
import {styles} from './styles';
const Home = ({navigation: {navigate}, getAlbumData}) => {
  const onButtonPress = (a) => {
    console.log('Button pressed', a);
    navigate('AlbumView');
  };
  return (
    <View style={styles.container}>
      <Header text={'Photo Album App'} />
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
            onButtonPress={onButtonPress}
          />
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
  return {
    getAlbumData: () => dispatch(getAlbumData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
