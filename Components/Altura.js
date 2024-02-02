import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default props => {
  return (
    <View style={estilos.bloco}>
      <Text>Informe sua altura:</Text>
      <TextInput
        style={estilos.txt}
        autoFocus={false}
        keyboardType='numeric'
        onChangeText={text => props.mAltura(text)}
        value={props.altura}
      ></TextInput>
    </View>
  )
}

const estilos = StyleSheet.create({
  bloco: {
    marginBottom: 20
  },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10
  }
})