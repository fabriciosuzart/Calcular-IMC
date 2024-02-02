import React from "react";
import { View, StyleSheet , Image} from "react-native";

export default props => {
  return (
    <View>
      {props.visivel && <Image
        source={require('../assets/Images/tabela-imc.png')}
        style={estilos.imgTable}
      >
      </Image>}
    </View>
  )
}

const estilos = StyleSheet.create({
  imgTable: {
    resizeMode: 'stretch',
    width: 340,
    height: 200,
    marginBottom: 50
  }
})