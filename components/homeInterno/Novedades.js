import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import Novedad from './Novedad';

const renderNovedades = (novedades) => {
  return novedades.map((novedad, index) => {
    return <Novedad
      key={index}
      titulo={novedad.titulo}
      descripcion={novedad.descripcion}
      imagen={novedad.imagen}
    />;
  });
};

const Novedades = ({ novedades }) => (
  <View style={styles.container}>
    <Swiper

    >
      {renderNovedades(novedades)}
    </Swiper>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: '#555',
    marginBottom: 20,
    overflow: 'hidden',
    height: 160,
  }
});

Novedades.propTypes ={
  novedades: PropTypes.array.isRequired
}

export default Novedades;