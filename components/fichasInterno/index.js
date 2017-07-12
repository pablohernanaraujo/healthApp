import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,TouchableHighlight
} from 'react-native';

const ancho = (Dimensions.get('window').width) - 100;

const FichasInterno = ({ navigate }) => (
  <ScrollView style={styles.container}>
    <View style={styles.interior}>
      <Image 
        style={styles.avatar}
        source={require('../../images/ficha-foto-usuario.jpg')} 
      />
      <Text style={styles.texto}>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.</Text>
      <View style={styles.contenedorBotones}>
        <TouchableHighlight style={styles.boton}>
          <Text style={styles.botonTexto}>OMITIR</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={styles.botonColor}
          onPress={() => navigate('Modal')}
        >
          <Text style={styles.botonTextoColor}>Registrarse</Text>
        </TouchableHighlight>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  interior: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    marginTop: 70
  },
  texto: {
    width: ancho,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 12
  },
  contenedorBotones: {
    flex: 1,
    flexDirection: 'row'
  },
  boton: {
    padding: 10
  },
  botonColor: {
    padding: 10,
    backgroundColor: '#08ae9e',
    borderRadius: 2,
    marginLeft: 10
  },
  botonTexto: {
    color: '#999'
  },
  botonTextoColor: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default FichasInterno;