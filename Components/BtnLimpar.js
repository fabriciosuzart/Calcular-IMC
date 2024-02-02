import React from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

export default props => {
  return (
    <View style={estilos.bloco}>
          <TouchableHighlight
            style={estilos.btnCalc}
            onPress={props.mLimpar}
          >
            <Text style={estilos.txtBtn}>Limpar</Text>
          </TouchableHighlight>
        </View>
  )
}

const estilos = StyleSheet.create({
  bloco: {
    marginBottom: 20
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginBottom: 5,
    marginTop: -17
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff'
  }
})