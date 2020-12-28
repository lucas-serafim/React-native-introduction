import React, { useState } from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Filho from './Filho'

export default () => {
   const [texto, setTexto] = useState('')
   const [num, setNum] = useState(0)

   function exibirValor(numero: number, inicio: string) {
      setNum(numero)
      setTexto(inicio)
   }
   
   return (
      <>
         <Text style = {estilo.fontG}>{texto} {num}</Text>

         <Filho 
            min = {1}
            max = {60}
            funcao = {exibirValor}
         />
      </>
   )
}