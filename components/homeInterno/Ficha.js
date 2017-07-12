import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Ficha = ({ navigate }) => (
  <TouchableHighlight 
    style={styles.boton}
    onPress={() => navigate('Fichas')}
  >
    <View style={styles.botonInterno}>
      <View style={styles.circulo}>
        <Icon
          name='add' 
          size={30} 
          color={'#7d7d7d'}
        />
      </View>
      <Text style={styles.texto}>Agregá tu primer Ficha</Text>
      <Text style={styles.texto}>Médica</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  boton: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    borderColor: '#333',
    borderStyle: 'dotted',
    borderWidth: 1,
    padding: 15,
  },
  botonInterno: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circulo: {
    width: 60,
    height: 60,
    backgroundColor: '#d9d9d9',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  texto: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(50,50,50,0.5)'
  }
});

export default Ficha;