import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class Modal extends React.Component {
  static navigationOptions = {
    headerTitle: 'Modal',
    headerTitleStyle: {
      color: '#fff'
    },
    headerStyle: {
      backgroundColor: '#000',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Modal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'crimson'
  }
});

Modal.propTypes = {
  
};

export default Modal;