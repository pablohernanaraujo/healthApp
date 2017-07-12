import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TelefonosInterno from '../components/telefonosInterno/index';

class Telefonos extends React.Component {
  static navigationOptions = {
    headerTitle: 'Teléfonos Útiles',
    headerTitleStyle: {
      color: '#fff'
    },
    headerStyle: {
      backgroundColor: '#000',
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='phone' 
        size={30} 
        color={tintColor}
      />
    )
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TelefonosInterno />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Telefonos;