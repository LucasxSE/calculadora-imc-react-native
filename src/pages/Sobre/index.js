import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>O que é o IMC?</Text>

      <View style={styles.bloco}>
        <Text style={styles.textBloco}>
          O Índice de Massa Corporal é um cálculo que permite medir se uma pessoa
          está ou não com o peso ideal. Ele eponta se o peso está adequado ou se está
          abaixo ou acima do peso.
        </Text>

        <Text style={styles.textBloco}>
          Esse cálculo é feito utilizando o peso e a altura da pessoa. Basta dividir
          o peso pela altura ao quadrado.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  bloco: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15
  },

  textBloco: {
    fontSize: 17,
    marginBottom: 5,
    marginTop: 5,
  },
});