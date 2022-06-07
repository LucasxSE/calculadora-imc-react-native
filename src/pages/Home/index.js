import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Calculadora')}>
        <Image
          style={styles.imagem}
          source={require('../../../assets/calculadora.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
        <Image
        style={styles.imagem}
        source={require('../../../assets/sobre.png')}
        />
      </TouchableOpacity>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  imagem: {
    width: 100,
    height: 100,
  },
});
