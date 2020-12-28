import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props: { min: any; max: any }) => {
   
   const { min, max } = props
   const x = parseInt(Math.random() * (max - min) + min)

   return (
      <Text style = {Estilo.fontG}>
         Valor aleatório é {x}
      </Text>
   )
}