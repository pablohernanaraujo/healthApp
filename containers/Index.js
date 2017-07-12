import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Tabbar'})
  ]
});

class Index extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='dark-content'
        />
        <TouchableHighlight
          style={styles.boton}
          onPress={()=> this.props.navigation.dispatch(resetAction)}
        >
          <Text style={styles.botonTexto}>Continuar como invitado</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boton: {
    padding: 16,
    backgroundColor: '#08ae9e',
    borderRadius: 2,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default Index;
