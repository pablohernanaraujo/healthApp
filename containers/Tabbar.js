import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from './Home';
import Mapa from './Mapa';
import Fichas from './Fichas';
import Telefonos from './Telefonos';
import Perfil from './Perfil';

const Tabbar = TabNavigator({
  Home: {
    screen: Home
  },
  Mapa: {
    screen: Mapa
  },
  Fichas: {
    screen: Fichas
  },
  Telefonos: {
    screen: Telefonos
  },
  Perfil: {
    screen: Perfil
  }
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#000',
    showLabel: false
  },
  style: {
    backgroundColor: '#efefef',
    color: '#999'
  }
});

export default Tabbar;