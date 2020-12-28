import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Estilo from './estilo'

export default () => {
   const [nome, setNome] = useState('Teste')
   return (
      <View>
         <TextInput 
            placeholder = "Digite seu nome"
            value = {nome}
            onChangeText = {nome => setNome(nome)}
         />
      </View>
   )
}

