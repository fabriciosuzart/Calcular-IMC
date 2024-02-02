import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default props => {
  return (
    <View style={estilos.centro}>
      <Text style={estilos.result}>Resultado: {props.resultado} Classificação: {props.classi}</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  result: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: 15,
    color: '#f00',
    padding: 10,
    marginBottom: 5
  },
  centro: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})