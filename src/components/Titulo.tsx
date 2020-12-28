import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props: { principal: React.ReactNode; secundario: React.ReactNode }) => {

   return (
      <>
         <Text style = {Estilo.fontG}>{props.principal}</Text>
         <Text>{props.secundario}</Text>
      </>
   )
}
