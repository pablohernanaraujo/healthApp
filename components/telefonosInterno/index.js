import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';

import Telefono from './Telefono';

const TelefonosInterno = () => (
  <ScrollView style={styles.container}>
    <Telefono
      numero={107}
      nombre={'SAME'}
    />
    <Telefono
      numero={103}
      nombre={'Emergencias'}
    />
    <Telefono
      numero={108}
      nombre={'Línea Social'}
    />
    <Telefono
      numero={147}
      nombre={'Atención Ciudadana'}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default TelefonosInterno;