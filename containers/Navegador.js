import React from 'react';
import { StackNavigator } from 'react-navigation';
import { 
  View,
  Text
} from 'react-native';

import Index from './Index';
import Tabbar from './Tabbar';
import Modal from './Modal';

const Navegador = StackNavigator(
  {
    Index: { 
      screen: Index 
    },
    Tabbar: { 
      screen: Tabbar 
    },
    Modal: { 
      screen: Modal 
    }
  },
  {
    mode: 'modal'
  }
);

export default Navegador;