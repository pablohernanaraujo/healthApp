import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Separador from '../components/Separador';
import Novedades from '../components/homeInterno/Novedades';
import Ficha from '../components/homeInterno/Ficha';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      novedades: [
        {
          titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          descripcion: 'Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt.',
          imagen: 'https://www.ptpi.org/cmspages/getfile.aspx?nodeguid=d27429c8-6611-43cd-ae37-9a9af281fce8'
        },
        {
          titulo: 'Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
          descripcion: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
          imagen: 'http://www.lse.ac.uk/africa/Assets/Images/People-CarstenVogel1.jpg'
        },
        {
          titulo: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
          descripcion: 'Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imagen: 'http://villagegreennj.com/wp-content/uploads/2017/01/Diederik-Lohman.png'
        }
      ]
    };
  }
  static navigationOptions = {
    headerTitle: 'BA Salud',
    headerTitleStyle: {
      color: '#fff'
    },
    headerStyle: {
      backgroundColor: '#000',
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='home'
        size={30}
        color={tintColor}
      />
    )
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
        <View style={styles.encabezados}>
          <Text style={styles.encabezadoTitulo}>Novedades</Text>
          <TouchableHighlight style={styles.boton}>
            <View style={styles.botonInterno}>
              <Text style={styles.botonTexto}>ver todos</Text>
              <Icon
                name='chevron-right'
                size={15}
                color={'#999'}
                style={styles.botonIcon}
              />
            </View>
          </TouchableHighlight>
        </View>
        <Separador />
        <Novedades
          novedades={this.state.novedades}
        />
        <View style={styles.encabezados}>
          <Text style={styles.encabezadoTitulo}>Fichas Médicas</Text>
        </View>
        <Separador />
        <Ficha navigate={navigate} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  encabezados: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  encabezadoTitulo: {
    fontSize: 18
  },
  boton: {
    paddingTop: 3
  },
  botonInterno: {
    flexDirection: 'row'
  },
  botonTexto: {
    color: '#999'
  },
  botonIcon: {
    paddingTop: 2
  }
});

export default Home;
