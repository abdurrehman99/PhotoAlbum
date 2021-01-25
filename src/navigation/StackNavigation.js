import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AlbumView from '../screens/AlbumView';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Navigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => null}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="AlbumView"
        component={AlbumView}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
