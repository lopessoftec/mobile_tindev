import { YellowBox } from 'react-native';
import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket' //devo colocar as duas primieroas palavras da info em amarelo
]);

import Routes from './routes';

export default function App(){
  return(
    <Routes />

    // a primeria chave indica que quero colocar javascript e a outra é um objeto do js
    // flex:1 - ocupe todo o espaço possivel
    // <View style={ styles.container }>
    //   <Text style={ styles.text }>Hello Word</Text>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     //display: 'flex',
//     //flexDirection: 'row', //os elementos vem um lado do outro, mas tem que usar o display junto. por padrão é colum mas irei colocar row
//     backgroundColor: '#7159c1', 
//     justifyContent: 'center', //alinha verticalmente
//     alignItems: 'center' //alinha no centro da tela. Alinha horizontalmente
//   },
//   text: {
//     fontWeight: 'bold', //negrito
//     color: '#FFF',
//     fontSize: 20
//   }
// })