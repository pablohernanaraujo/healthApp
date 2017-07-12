import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Mapa extends React.Component {
  static navigationOptions = {
    headerTitle: 'Directorio',
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#000',
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='location-on' 
        size={30} 
        color={tintColor}
      />
    )
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Mapa</Text>
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

export default Mapa;