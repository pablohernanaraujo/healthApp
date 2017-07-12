import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Telefono = ({numero, nombre}) => (
  <TouchableHighlight style={styles.container}>
    <View style={styles.contenedorInterno}>
      <View style={styles.contenedorIzquierdo}>
        <Text style={styles.numero}>{numero}</Text>
        <View style={styles.separador}></View>
        <Text style={styles.nombre}>{nombre}</Text>
      </View>
      <View style={styles.contenedorDerecho}>
        <Icon
          name='phone' 
          size={22} 
          color='#7d7d7d'
        />
        <Icon
          name='chevron-right' 
          size={22} 
          color='#7d7d7d'
        />
      </View>
    </View>
  </TouchableHighlight>
);

Telefono.propTypes = {
  numero: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18
  },
  contenedorInterno: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contenedorIzquierdo: {
    flexDirection: 'row',
    paddingTop: 2
  },
  contenedorDerecho: {
    flexDirection: 'row'
  },
  numero: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7d7d7d'
  },
  nombre: {
    fontSize: 16,
    color: '#7d7d7d'
  },
  separador: {
    width: 2,
    backgroundColor: '#dacfcc',
    height: 16,
    marginTop: 4,
    marginLeft: 5,
    marginRight: 5
  }
});

export default Telefono;

/*
 fondo activo
 backgroundColor: '#666',
 color: '#fff'
*/