import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,TouchableHighlight
} from 'react-native';

const ancho = (Dimensions.get('window').width) - 100;

const PerfilInterno = () => (
  <ScrollView style={styles.container}>
    <View style={styles.interior}>
      <Image 
        style={styles.avatar}
        source={require('../../images/ficha-foto-usuario.jpg')} 
      />
      <Text style={styles.texto}>Registrate en miBA para poder disfrutar los beneficios de todas las aplicaciones del Gobierno de la Ciudad de Buenos Aires.</Text>
      <View style={styles.contenedorBotones}>
        <TouchableHighlight style={styles.botonColor}>
          <Text style={styles.botonTextoColor}>Registrarse</Text>
        </TouchableHighlight>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  interior: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 70
  },
  texto: {
    width: ancho,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 14,
    color: '#808080'
  },
  contenedorBotones: {
    flex: 1,
    flexDirection: 'row'
  },
  boton: {
    padding: 10
  },
  botonColor: {
    paddingTop: 12,
    paddingBottom:12,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#08ae9e',
    borderRadius: 2
  },
  botonTexto: {
    color: '#999'
  },
  botonTextoColor: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default PerfilInterno;