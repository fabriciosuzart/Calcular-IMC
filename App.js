import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { EventSubscriptionVendor } from 'react-native/Libraries/vendor/emitter/EventEmitter';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Estilos from './Styles/Estilos.js'
import Peso from './Components/Peso.js'
import Altura from './Components/Altura.js'
import BtnCalcular from './Components/BtnCalcular.js'
import BtnLimpar from './Components/BtnLimpar.js'
import Result from './Components/Resultado.js'
import Table from './Components/Table.js'

export default function calcic() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState(0)
  const [classi, setClassi] = useState('')

  const [visivel, setVisivel] = useState(false)

  const calcImc = () => {
    if (!peso) {
      alert('Informe o Peso')
      setVisivel(false)
      return
    }
    if (!altura) {
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

  const clearText = () => {
    setAltura('')
    setClassi('')
    setPeso('')
    setResultado('')
    setVisivel(false)
  };

  const mImage = () => {
    setVisivel(!visivel)
  }

  return (
    <SafeAreaView style={Estilos.corpo}>
      <View style={Estilos.titulo}>
        <Text style={Estilos.titulo}>Calculadora de IMC</Text>
      </View>
      <KeyboardAwareScrollView style={Estilos.corpo}>
        <Peso mPeso={setPeso} peso={peso} />
        <Altura mAltura={setAltura} altura={altura} />
        <BtnCalcular mClicar={calcImc} mImage={mImage} />
        <BtnLimpar mLimpar={clearText} />
        <Result resultado={resultado} classi={classi} />
        <Table visivel={visivel} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}