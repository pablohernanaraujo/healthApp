import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';

const ancho = (Dimensions.get('window').width) - 38;

const Novedad = ({ titulo, descripcion, imagen }) => (
  <View style={styles.container}>
    <View style={styles.contenedorEncabezado}>
      <Image
        style={styles.encabezadoImagen}
        source={{uri: imagen}}
      />
      <View style={styles.item}>
        <Text numberOfLines={3} style={styles.encabezadoTexto}>{titulo}</Text>
      </View>
    </View>
    <Text numberOfLines={4} style={styles.texto}>{descripcion}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: ancho,
    padding: 10
  },
  contenedorEncabezado: {
    marginBottom: 15,
    flexDirection: 'row',
  },
  encabezadoImagen: {
    width: 60,
    height: 60
  },
  item: {
    flex: 1,
    paddingLeft: 10,
    width: 40
  },
  encabezadoTexto: {
    fontWeight: 'bold',
    color: 'rgba(50,50,50,0.7)'
  },
  texto: {
    color: 'rgba(50,50,50,0.5)'
  }
});

Novedad.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired
};

export default Novedad;