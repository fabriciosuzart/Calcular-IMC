import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { EventSubscriptionVendor } from 'react-native/Libraries/vendor/emitter/EventEmitter';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Estilos from './Styles/Estilos.js'


export default function calcic() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [classi, setClassi] = useState('')

  const [visivel, setVisivel] = useState(false)

  const calcImc = () => {
    if (peso == 0 || !peso) {
      alert('Informe o Peso')
      setVisivel(false)
      return
    }
    if (altura == 0 || !altura) {
      alert('Informe a altura')
      setVisivel(false)
      return
    }
    const r = peso / (altura * altura)
    setResultado(r.toFixed(1))//define a quantidade de casas decimais 
    calssificacao(r)
  }

  const calssificacao = (r) => {
    if (r <= 18.5) {
      setClassi('Abaixo do peso')
    }
    else if (r >= 18.6 && r <= 24.9) {
      setClassi('Peso ideal')
    }
    else if (r >= 25 && r <= 29.9) {
      setClassi('Acima do peso')
    }
    else if (r >= 30 && r <= 34.9) {
      setClassi('Obseidade 1º')
    }
    else if (r >= 35 && r <= 39.9) {
      setClassi('Obseidade 2º')
    }
    else if (r >= 40) {
      setClassi('Obseidade 3º')
    }
  }

  return (
    <SafeAreaView style={Estilos.corpo}>
      <View style={Estilos.titulo}>
        <Text style={Estilos.titulo}>Calculadora de IMC</Text>
      </View>
      <KeyboardAwareScrollView style={Estilos.corpo}>
        <View style={Estilos.bloco}>
          <Text>Informe seu peso:</Text>
          <TextInput
            style={Estilos.txt}
            autoFocus={true}
            keyboardType='numeric'
            onChangeText={text => setPeso(text)}
          ></TextInput>
        </View>

        <View style={Estilos.bloco}>
          <Text>Informe sua altura:</Text>
          <TextInput
            style={Estilos.txt}
            autoFocus={false}
            keyboardType='numeric'
            onChangeText={text => setAltura(text)}
          ></TextInput>
        </View>

        <View style={Estilos.bloco}>

          <TouchableHighlight
            style={Estilos.btnCalc}
            onPress={() => {
              calcImc(setVisivel(true))
            }
            }
          >
            <Text style={Estilos.txtBtn}>Calcular IMC</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={Estilos.btnCalc}
            onPress={() => {
              setVisivel(false)
              setAltura('')
              setPeso('')
              setResultado('')
            }
            }
          >
            <Text style={Estilos.txtBtn}>Limpar</Text>
          </TouchableHighlight>
        </View>

        <View style={Estilos.centro}>
          <Text style={Estilos.result}>Resultado: {resultado} Classificação: {classi}</Text>
        </View>
        <View>
          {visivel && <Image
            source={require('./assets/Images/tabela-imc.png')}
            style={Estilos.imgTable}
          >
          </Image>}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}