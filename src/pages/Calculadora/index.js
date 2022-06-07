import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet, Text, View, Image, Alert, Pressable, Dimensions, Button } from 'react-native';

export default function Calculadora({ navigation }) {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  
  function calculoIMC(){
    const imc = (weight/(height*height)).toFixed(2);
  
    if(imc < 18.5){
      Alert.alert("IMC", "Seu IMC é: " + imc + "! \n\nVocê está Abaixo do Peso!");
    } else if(imc >= 18.5 && imc <= 24.9){
      Alert.alert("IMC", "Seu IMC é: " + imc + "! \n\nVocê está com o Peso Normal!");
    } else if(imc >= 25 && imc <= 29.9){
      Alert.alert("IMC", "Seu IMC é: " + imc + "! \n\nVocê está com Excesso de Peso!");
    } else if(imc >= 30 && imc <= 34.9){
      Alert.alert("IMC", "Seu IMC é: " + imc + "! \n\nVocê está com Obesidade Classe I!");
    } else if(imc >= 35 && imc <= 39.9){
      Alert.alert("IMC", "Seu IMC é: " + imc + "! \n\nVocê está com Obesidade Classe II!");
    } else if(imc >= 40){
      Alert.alert("IMC", "Seu IMC é: " + imc + "! \n\nVocê está com Obesidade Classe III!");
    } 
  }
  
  function validacaoIMC(){
    if(weight == null || height == null){
      Alert.alert("Alerta!", "Insira seu peso e sua altura!");
    } else if(weight != null && height != null){
      calculoIMC();
      setHeight(null);
      setWeight(null);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image style={styles.logo} source={require('../../../assets/imc.png')}/>
  
        <Text style={styles.titulo}>Calculadora de IMC</Text>
  
        <View>      
          <Text style={styles.inputName}>Altura</Text>
            <TextInputMask 
              type={'custom'}
              options={{
                mask: '9.99'
              }}
              value={height}
              onChangeText={text => setHeight(text)}
              placeholder='Ex: 180' 
              keyboardType={'numeric'} 
              style={styles.input}
            />
  
          <Text style={styles.inputName}>Peso</Text>
            <TextInputMask
              type={'custom'}
              options={{
                mask: '999'
              }}
              value={weight}
              onChangeText={setWeight}
              placeholder='Ex: 80' 
              keyboardType={'numeric'} 
              style={styles.input}
            />
        </View>
  
        <Pressable 
          title="Calcular"
          onPress={() => validacaoIMC()}
          style={styles.botao}>
              
          <Text style={styles.textoBotao}>Calcular</Text>
        </Pressable>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#f2f3f4",
    },

    form: {
      height: 450,
      width: Dimensions.get('window').width,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f2f3f4",
      borderRadius: 6,
    },

    logo: {
      marginBottom: 20,
      width: 100,
      height: 100,
    },

    titulo: {
        fontWeight: "700",
        fontSize: 30,
        marginBottom: 20,
        textAlign: "center"
    },  
  
    inputName: {
      fontSize: 15,
      fontWeight: "bold",
    },
  
    input: {
      height: 40,
      width: 250,
      borderWidth: 1,
      padding: 5,
      marginBottom: 20,
      borderRadius: 5,
      borderColor: "#00ab94",
    },
  
    botao: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 40,
      borderRadius: 20,
      elevation: 4,
      backgroundColor: "black",
    },
  
    textoBotao: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      lineHeight: 21,
      letterSpacing: 1,
    },
});