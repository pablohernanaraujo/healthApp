import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FichasInterno from '../components/fichasInterno/index';

class Fichas extends React.Component {
  static navigationOptions = {
    headerTitle: 'Fichas Médicas',
    headerTitleStyle: {
      color: '#fff'
    },
    headerStyle: {
      backgroundColor: '#000',
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='folder-shared' 
        size={30} 
        color={tintColor}
      />
    )
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FichasInterno navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Fichas;