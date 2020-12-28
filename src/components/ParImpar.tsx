import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

export default (props: { num: number }) => {
  
   return (
      <View>
         <Text style = {Estilo.fontG}>O resultado é:</Text>
         {props.num % 2 === 0
            ? <Text style = {Estilo.fontG}>Par</Text>
            : <Text style = {Estilo.fontG}>impar</Text>
         }

      <Text style = {Estilo.fontG}>{props.num % 2 === 0 ? "Par" : "Impar"}</Text>
      </View>
   )
   
}