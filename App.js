import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TextInput, Image } from 'react-native';
import { EventSubscriptionVendor } from 'react-native/Libraries/vendor/emitter/EventEmitter';
import Tabela from './assets/Images/tabela-imc.png'

export default function calcic() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  const [visivel, setVisivel] = useState(false)

  const calcImc = () => {
    if (peso == 0 || !peso) {
      alert('Informe o Peso')
      return
    }
    if (altura == 0 || !altura) {
      alert('Informe a altura')
      return
    }
    const r = peso / (altura * altura)
    setResultado(r.toFixed(1))//define a quantidade de casas decimais 
  }

  return (
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>
      <View style={estilos.bloco}>
        <Text>Informe seu peso:</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={true}
          keyboardType='numeric'
          onChangeText={text => setPeso(text)}
        ></TextInput>
      </View>

      <View style={estilos.bloco}>
        <Text>Informe sua altura:</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={false}
          keyboardType='numeric'
          onChangeText={text => setAltura(text)}
        ></TextInput>
      </View>

      <View style={estilos.bloco}>

        <TouchableHighlight
          style={estilos.btnCalc}
          onPress={() => {
            calcImc()
            setVisivel(true)
          }
          }
        >
          <Text style={estilos.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={estilos.btnCalc}
          onPress={() => {
            setVisivel(false)
            setAltura('')
            setPeso('')
            setResultado('')
          }
          }
        >
          <Text style={estilos.txtBtn}>Limpar</Text>
        </TouchableHighlight>
      </View>

      <View style={estilos.bloco}>
        <Text style={estilos.txtResult}>Resultado: {resultado}</Text>
      </View>
      <View>
        {visivel && <Image
          source={require('./assets/Images/tabela-imc.png')}
          style={estilos.imgTable}
        >
        </Image>}
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    padding: 10,
    marginTop: 15
  },
  bloco: {
    marginBottom: 20
  },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginBottom: 5
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff'
  },
  imgTable: {
    resizeMode: 'stretch',
    width: 340,
    height: 200
  },
  txtResult: {
    color: '#f00'
  }
})

