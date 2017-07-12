import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separador = () => (
  <View style={styles.separador}></View>
);

const styles = StyleSheet.create({
  separador: {
    height: 1,
    backgroundColor: '#888',
    marginTop: 10,
    marginBottom: 25
  },
});

export default Separador;