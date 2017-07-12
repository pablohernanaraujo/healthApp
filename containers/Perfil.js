import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PerfilInterno from '../components/perfilInterno/index';

class Perfil extends React.Component {
  static navigationOptions = {
    headerTitle: 'Mi Perfil',
    headerTitleStyle: {
      color: '#fff'
    },
    headerStyle: {
      backgroundColor: '#000',
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='account-circle' 
        size={30} 
        color={tintColor}
      />
    )
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <PerfilInterno />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'crimson',
  },
});

export default Perfil;